# Server Overview

This is an old instance of the project. For the newer version visit the Server refered in the ReadMe.

## Monitoring and Error Handling
Two middleware functions monitor the server’s health:
1. **Performance Tracking**: Measures request processing times and notifies the admin if the processing time exceeds the expected threshold. This is especially important for cart processing.
2. **Error Handling**: Captures abnormal errors and notifies the admin, while allowing acceptable errors to be sent to the frontend for user notification.

Additionally, there are endpoints available to test performance and monitor system health, but an admin account is required for accessing these results.

## Database & Security
- **Database**: The database currently uses MongoDB, but a transition to a relational database and a Java-based server is in progress to improve scalability.
- **Authentication**: The server uses JWT (JSON Web Tokens) and cookies for session management. Passwords are securely encrypted to prevent unauthorized access.

  ### High-Level Overview

The server integrates **Redis** to handle caching and ensures high availability even in the case of Redis failure, by implementing fallback mechanisms. The system employs a **standard eviction policy** for cache management and utilizes **locking mechanisms** for synchronization. This allows the server to continue functioning seamlessly, even if Redis becomes temporarily unavailable.

### Caching Algorithm
Here's a breakdown of how the system functions:

1. **User Interaction**: A new user begins interacting with the server. Initially, the server handles this user’s requests.
2. **Redis Cache**: The system checks the cache and notes that the user has interacted.
3. **Cache Handling**: Once the user is identified, subsequent cart interactions (read or write) are handled by Redis, ensuring that the server can quickly serve cached data.
4. **User Categorization**: Users are categorized into two groups:
   - High-frequency request users ("active").
   - Low-frequency request users ("calm").
5. **Cache Eviction**: Redis uses a standard eviction policy (such as LRU) to manage the cached data. This ensures that the least recently used data is evicted when space is needed.
6. **Data Clearance**: Inactive users' data is cleared to prevent memory overflow. The system operates with a batch-based mechanism to clean up unused or stale data.
7. **Cache Availability**: In case Redis becomes unavailable, the system ensures that the database remains fully functional, allowing the server to continue handling requests with minimal disruption.

**Why**: The mechanism mimics an LRU policy while ensuring no data is lost in the process of memory management. In case Redis becomes unavailable, the database can continue functioning to ensure constant availability and reduce costs.
- **Please note**: This functionality has been reworked in the newer version of the server.

## Router Structure
The server’s functionality is split across several routers to maintain separation of concerns and avoid clashes between different API endpoints:
- `/user`: Handles user authentication and management.
- `/translations`: Manages localization and language settings.
- `/faq`: Handles frequently asked questions.
- `/catalog`: Manages catalog-related data.
- `/cart`: Handles cart-related operations.
- `/stateTracker`: Tracks user session states and performance.

## Middleware Implementation
The server uses two important middleware functions:
- **AuthValidator**: Ensures users are authenticated before accessing protected routes.
- **TrackingService**: Tracks failed requests and slow queries to ensure performance stays within the acceptable range.

## Server Code Example

Here is an example of how the server is structured using Express.js:

```javascript

const PORT = process.env.PORT || 3000;

async function start() {
    const app = express();

    await configDatabase();
    configExpress(app);

    app.use(cookieParser());
    app.use(validateAuth);

    app.use("/user", userRouter);
    app.use("/translations", languageRouter);
    app.use("/faq", faqRouter);
    app.use("/catalog", bookRouter);
    app.use("/cart", cartRouter);
    app.use("/stateTracker", stateTrackerRouter);

    app.use((err, req, res, next) => {
      const errorType = err.status || 'UnknownError';
      if (errorType >= 500) {
          trackFailedRequest(errorType);
      }
      next(err);
    });

    app.use((err, req, res, next) => {
      console.error('An error occurred:', err); 
      res.status(err.status || 500).json({ message: 'Internal Server Error' });
    });

    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

start();

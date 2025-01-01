export default function FAQ () {

    return (
<section className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-16">
      <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
        FAQs
      </h6>
      <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
        Frequently asked questions
      </h2>
    </div>

    <div className="accordion-group">
      <details className="accordion py-8 px-6 border-b border-solid border-gray-200 rounded-2xl hover:bg-indigo-50">
        <summary className="accordion-toggle flex items-center justify-between text-gray-900 text-left cursor-pointer">
          <h5 className="text-lg font-semibold">How do I update my billing information?</h5>
          <svg className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="accordion-content px-0 overflow-hidden">
          <p className="text-base text-gray-900 leading-6">
            To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.
          </p>
        </div>
      </details>

      <details className="accordion py-8 px-6 border-b border-solid border-gray-200 rounded-2xl hover:bg-indigo-50">
        <summary className="accordion-toggle flex items-center justify-between text-gray-900 text-left cursor-pointer">
          <h5 className="text-lg font-semibold">How can I contact customer support?</h5>
          <svg className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="accordion-content px-0 overflow-hidden">
          <p className="text-base text-gray-900 leading-6">
            To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.
          </p>
        </div>
      </details>

      <details className="accordion py-8 px-6 border-b border-solid border-gray-200 rounded-2xl hover:bg-indigo-50">
        <summary className="accordion-toggle flex items-center justify-between text-gray-900 text-left cursor-pointer">
          <h5 className="text-lg font-semibold">How do I update my profile information?</h5>
          <svg className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="accordion-content px-0 overflow-hidden">
          <p className="text-base text-gray-900 leading-6">
            To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.
          </p>
        </div>
      </details>

      <details className="accordion py-8 px-6 border-b border-solid border-gray-200 rounded-2xl hover:bg-indigo-50">
        <summary className="accordion-toggle flex items-center justify-between text-gray-900 text-left cursor-pointer">
          <h5 className="text-lg font-semibold">How do I find my purchase history?</h5>
          <svg className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="accordion-content px-0 overflow-hidden">
          <p className="text-base text-gray-900 leading-6">
            To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.
          </p>
        </div>
      </details>
    </div>

    {/* Section for submitting a new question */}
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Can't find your answer? Ask a question!
      </h3>
      <form className="max-w-lg mx-auto space-y-4" >
        <label htmlFor="question" className="block text-lg font-medium text-gray-900 dark:text-white">
          Your Question:
        </label>
        <textarea
          id="question"
          name="question"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Type your question here..."
     
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Submit Question
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

      );
}
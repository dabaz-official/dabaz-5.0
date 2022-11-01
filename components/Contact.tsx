import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyvpklk");

  if (state.succeeded) {
      return <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'><p className='text-gray-900 text-lg'>Thanks for your message!</p></div>;
  }

  return (
    <div className="mt-12">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-300 bg-white rounded-xl"
            />
            <ValidationError 
              prefix="FirstName" 
              field="first-name"
              errors={state.errors}
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-300 bg-white rounded-xl"
            />
            <ValidationError 
              prefix="LastName" 
              field="last-name"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-300 bg-white rounded-xl"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={6}
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-300 bg-white rounded-xl"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  )
}

function ContactFunction() {
  return (
    <ContactForm />
  )
}

export default ContactFunction
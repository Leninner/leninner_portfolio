import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import Airtable from 'airtable'

export const ContactForm = () => {
  const base = new Airtable({ apiKey: 'keyn9uOE5rL7BT81q' }).base('app7X4dObbq9Fa7xN')
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        setFormSubmitted(false)
      }, 3000)
    }
  }, [formSubmitted])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values)
      formik.resetForm()

      base('Clients').create(
        [
          {
            fields: {
              Date: new Date().toDateString(),
              Name: values.name,
              Email: values.email,
              Phone: values.phone,
              Message: values.message,
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error(err)
            return
          }
          records.forEach(function (record) {
            console.log(record.getId())
          })
        }
      )

      setFormSubmitted(true)
    },
    errors: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate: (values) => {
      const errors = {}

      if (!values.name) {
        errors.name = 'Name is required'
      } else if (values.name.length < 3 || values.name.length > 30) {
        errors.name = 'Name must be at least 3 characters and less than 30'
      } else if (!/^[a-zA-Z ]+$/.test(values.name)) {
        errors.name = 'Name must be letters only'
      }

      if (!values.email) {
        errors.email = 'Email is required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }

      if (!values.phone) {
        errors.phone = 'Phone is required'
      } else if (!/^(\+)?[0-9]{10,14}$/.test(values.phone)) {
        errors.phone = 'Invalid phone number'
      }

      if (!values.message) {
        errors.message = 'Message is required'
      } else if (values.message.length < 10 || values.message.length > 500) {
        errors.message = 'Message must be at least 10 characters and less than 500'
      }

      return errors
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          className={formik.errors.name && formik.touched.name ? 'error' : ''}
          type="text"
          name="name"
          placeholder={formik.errors.name && formik.touched.name ? formik.errors.name : 'Name'}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />

        <input
          className={formik.errors.email && formik.touched.email ? 'error' : ''}
          type="email"
          name="email"
          placeholder={formik.errors.email && formik.touched.email ? formik.errors.email : 'Email'}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
      </div>

      <input
        className={formik.errors.phone && formik.touched.phone ? 'error' : ''}
        type="text"
        name="phone"
        placeholder={
          formik.errors.phone && formik.touched.phone ? formik.errors.phone : 'Phone (without parentheses and spaces)'
        }
        onChange={formik.handleChange}
        value={formik.values.phone}
        onBlur={formik.handleBlur}
      />
      <textarea
        className={formik.errors.message && formik.touched.message ? 'error' : ''}
        name="message"
        placeholder={formik.errors.message && formik.touched.message ? formik.errors.message : 'Message'}
        onChange={formik.handleChange}
        value={formik.values.message}
        onBlur={formik.handleBlur}
      />
      <button type="submit">{formSubmitted ? 'Submitted' : 'Submit'}</button>
    </form>
  )
}

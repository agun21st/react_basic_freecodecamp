import React from 'react'

export default function Form() {

    const [formData, setFormData] =  React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: ""
    });

    console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

  return (

    <form className='mt-5 text-center'>
        <input
            type="text"
            placeholder='First Name'
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
        />
        <input
            type="text"
            placeholder='First Name'
            onChange={handleChange}
            className="m-4"
            name="lastName"
            value={formData.lastName}
        />
        <input
            type="email"
            placeholder='Email'
            onChange={handleChange}
            name="email"
            value={formData.email}
        />
        <br />
        <textarea onChange={handleChange} value={formData.comments} name="comments" />
        <input
            type="checkbox"
            className='m-2'
            id='isFriendly'
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
        />
        <label htmlFor='isFriendly'>Are you friendly?</label>
        <br />
        <br />
        <fieldset>
            <legend>Employment Status</legend>
            <input
                type="radio"
                id="unemployment"
                name='employment'
                value="unemployment"
                checked={formData.employment === "unemployment"}
                onChange={handleChange}
            />
            <label htmlFor='unemployment'>&nbsp;Unemployed</label>
            <br />
            <input
                type="radio"
                id="partTime"
                name='employment'
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}
            />
            <label htmlFor='partTime'>&nbsp;Part-time</label>
            <br />
            <input
                type="radio"
                id="fulltime"
                name='employment'
                value="full-time"
                checked={formData.employment === "full-time"}
                onChange={handleChange}
            />
            <label htmlFor='fulltime'>&nbsp;Full-time</label>

        </fieldset>
    </form>
  )
}

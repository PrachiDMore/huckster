import Layout from '@/components/Layout'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TermsAndConditions = () => {
	const [text, setText] = useState("");

	useEffect(() => {
	  axios('https://huckster-backend.vercel.app/get-legal')
	  .then((res) => {
		setText(res.data.response[[0]].termsAndCondition)
	  })
	}, [])
	
  return (
	<Layout>
		    <div className='w-screen lg:px-28 px-5 lg:py-20 py-10 mt-20 flex flex-col gap-5 min-h-screen'>
				<h1 className='text-4xl font-bold text-center'>Terms and Conditions</h1>
				<p dangerouslySetInnerHTML={{__html: text}}></p>
			</div>
	</Layout>
  )
}

export default TermsAndConditions
import React from 'react'
// import iconGithub from "@/assets/images/github-icon.png";
// import iconLinkein from '@/assets/images/linkedin-square-icon.png'

function footer() {
  return (
    <footer className="bg-[#7C9097] p-4 static bottom-0">
      <div className="text-2xl font-semibold text-white flex justify-between ">
        <p>Contact Me</p>
        <div className="flex">
          <a href="https://github.com/NakornKitk?tab=repositories"><img src="https://nakornkitk.github.io/sumline-shop/images/github-icon.png" alt="" className="w-10 mx-[5px] hover:scale-110 transform transition duration-2" /></a>
          <a href="https://www.linkedin.com/in/nakorn-kitkancharoensin/"><img src="https://nakornkitk.github.io/sumline-shop/images/linkedin-square-icon.png" alt="" className="w-10 hover:scale-110 transform transition duration-2"/></a>
        </div>
      </div>
    </footer>
  )
}

export default footer
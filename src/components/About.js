import React from 'react';
import Img from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <section id="about" className="my-6 mx-auto container w-3/5">
      <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
      <div className=" font-light text-lg flex justify-between">
        <div className="w-1/2">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="w-1/2">
          <figure className="w-2/3 mx-auto">
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About

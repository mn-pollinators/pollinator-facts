import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <Typography>Funding for this project was provided by the Minnesota Environment and Natural Resources
            Trust Fund as recommended by the Legislative-Citizen Commission on Minnesota Resources (LCCMR)
            </Typography>
            <a href="https://www.lccmr.leg.mn/">
                <img src="https://www.lccmr.leg.mn/css/graphics/enrtf-logo.jpg" alt="ENTRF logo" />
            </a>
        </Layout>
    )
}
export default About

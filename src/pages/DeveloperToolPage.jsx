import DeveloperToolHero from '../components/developerTool/HeroSection'
import { Helmet } from "react-helmet";
import ToolsPageLayout from '../components/developerTool/ToolsPageLayout';

const DeveloperToolPage = () => {
  return (
    <>
    <Helmet>
  <title>Saket Mishra :Developer Tools & Utilities</title>
  <meta
    name="description"
    content="A comprehensive collection of free developer tools built by Saket Mishra. Featuring JSON formatters, CSS generators, API testers, and productivity utilities for modern web development."
  />
  </Helmet>

    <DeveloperToolHero/>
    <ToolsPageLayout/>
    </>
  )
}

export default DeveloperToolPage

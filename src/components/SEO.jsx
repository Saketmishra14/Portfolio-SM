/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";
import profileImage from "../assets/heroImage-2.webp";
import projectBanner from "../assets/projects-page-banner.png";

export const SITE_URL = "https://saketmishra.in";

export const brand = {
  name: "Saket Mishra",
  siteName: "Saket Mishra Portfolio",
  title: "Software Engineer",
  description:
    "Saket Mishra is a software engineer, MERN stack developer, React developer, Salesforce and technical writer building responsive web experiences and developer tools.",
  email: "mishrasaket042@gmail.com",
  sameAs: [
    "https://github.com/Saketmishra14",
    "https://www.linkedin.com/in/saketmishra14/",
    "https://www.instagram.com/mishrasaket_14/",
    "https://www.salesforce.com/trailblazer/saketmishra14",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "JavaScript",
    "MERN Stack Development",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Material UI",
    "Salesforce",
    "GitHub Actions",
    "Technical Writing",
  ],
};

const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, SITE_URL).href;
};

export const defaultImage = absoluteUrl(profileImage);
export const defaultLogo = absoluteUrl("/favicon-96x96.png");

const cleanSchema = (value) => {
  if (Array.isArray(value)) {
    const cleanedArray = value.map(cleanSchema).filter(Boolean);
    return cleanedArray.length ? cleanedArray : undefined;
  }

  if (value && typeof value === "object") {
    const cleanedObject = Object.entries(value).reduce((result, [key, item]) => {
      const cleanedItem = cleanSchema(item);
      if (cleanedItem !== undefined && cleanedItem !== "") {
        result[key] = cleanedItem;
      }
      return result;
    }, {});

    return Object.keys(cleanedObject).length ? cleanedObject : undefined;
  }

  return value || undefined;
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: brand.name,
  url: SITE_URL,
  image: defaultImage,
  jobTitle: brand.title,
  description: brand.description,
  email: `mailto:${brand.email}`,
  knowsAbout: brand.knowsAbout,
  sameAs: brand.sameAs,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: brand.name,
  url: SITE_URL,
  logo: defaultLogo,
  sameAs: brand.sameAs,
  founder: { "@id": `${SITE_URL}/#person` },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: brand.siteName,
  url: SITE_URL,
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",

};

export const createProjectListSchema = (projects = []) =>
  cleanSchema({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/projects#projects`,
    name: "Saket Mishra Projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        url: project.link,
        codeRepository: project.source,
        programmingLanguage: project.stack,
        author: { "@id": `${SITE_URL}/#person` },
      },
    })),
  });

const SEO = ({
  title = brand.siteName,
  description = brand.description,
  path = "/",
  image = defaultImage,
  type = "website",
  noindex = false,
  schema = [],
}) => {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const normalizedTitle = title.includes(brand.name)
    ? title
    : `${title} | ${brand.name}`;
  const schemaList = [
    personSchema,
    organizationSchema,
    websiteSchema,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: normalizedTitle,
      description,
      url: canonicalUrl,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    ...schema,
  ]
    .map(cleanSchema)
    .filter(Boolean);

  return (
    <Helmet>
      <title>{normalizedTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,follow" />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brand.siteName} />
      <meta property="og:title" content={normalizedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={normalizedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">
        {JSON.stringify(schemaList)}
      </script>
    </Helmet>
  );
};

export { projectBanner };
export default SEO;

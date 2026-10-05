import artificalIntelligence from "../assets/certificates/introduction-to-ai.jpg";
import basicsDsa from "../assets/certificates/BasicsDSAcertificate.jpg";
import googleGemini from "../assets/certificates/Google-for-Education-gemini-certificate.jpg";
import AwsCloudPractitioner from "../assets/certificates/AWS-Cloud-Practioner.png";
import AwsAIPractitioner from "../assets/certificates/AWS-Certified-AI-Practitioner.png";
import AgentBuilderUdemy from "../assets/certificates/udemy-ai-agentbuilder.png";

const certificates = [
  {
    id: 1,
    title: "AWS Cloud Practitioner Essentials",
    organization: "AWS",
    image: AwsCloudPractitioner,
    date: "2026",
  },
  {
    id: 2,
    title: "Ultimate AWS Certified AI Practitioner AIFC01",
    organization: "Udemy",
    image: AwsAIPractitioner,
    date: "2026",
  },
  {
    id: 3,
    title: "AI Builder: Create Agents, Voice Agents & Automations in n8n",
    organization: "Udemy",
    image: AgentBuilderUdemy,
    date: "2026",
  },
  {
    id: 4,
    title: "Gemini Certified Student",
    organization: "Google Gemini",
    image: googleGemini,
    date: "2026",
  },
  {
    id: 5,
    title: "Basics Of Data Structure",
    organization: "Simplilearn",
    image: basicsDsa,
    date: "2025",
  },
  {
    id: 6,
    title: "Basics Of Artificial Agents",
    organization: "Simplilearn",
    image: artificalIntelligence,
    date: "2025",
  },
];

export default certificates;

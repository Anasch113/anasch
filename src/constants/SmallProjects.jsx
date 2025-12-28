
import { FaLanguage, FaRobot, FaMicrochip, FaMicrophone} from "react-icons/fa";

export const SmallProjects = [

    {
        icon: <FaLanguage />,
        name: (<>LiveWord —<i>Real-Time AI Translation Engine</i> </>),

        description: (
            <>
                A real-time multilingual transcription and translation platform supporting speech-to-text, text-to-speech, and enhanced NLP pipelines. Delivers smooth, accurate translations across languages with ultra-low latency.

            </>
        ),


    },

    // {
    //     icon: <GiTeacher />,

    //     name: (<>LinguaLatvia — <i>Interactive AI Language Tutor</i></>),

    //     description: (
    //         <>
    //             An AI-powered Latvian learning platform with conversational practice, vocabulary games, and progress tracking. Helps users learn through interactive exercises like word matching, fill-in-the-blanks, and word building.

    //         </>
    //     ),


    // },
    {
        icon: <FaRobot />,
        name: (<>ParkClear Assistant — <i>AI Parking Support Bot</i></>),

        description: (
            <>
                A smart assistant for parking management systems, offering instant responses, automated workflows, and efficient query handling. Designed to improve user support and operational productivity.


            </>
        ),


    },
    {
        icon: <FaMicrophone />,
        name: (<>PlauderFreund — <i>Empathic Voice AI Companion</i></>),

        description: (
            <>
                PlauderFreund is an empathic, voice-based AI companion for elderly users, built using GPT-5 Realtime and ElevenLabs streaming for ultra-low-latency conversations under 2 seconds. It supports natural voice interruptions, multilingual interactions, memory retention, and high-quality, human-like voice responses. The platform includes a powerful admin dashboard to manage user tokens, memory files, personality profiles, and custom voice settings, delivering a deeply personal and seamless talking experience.


            </>
        ),


    },
    {
        icon: <FaMicrochip />,
        name: (<>IntraMind —<i>Custom Fine-Tuned LLM + RAG Pipeline</i></>),

        description: (
            <>
                IntraMind is a fully fine-tuned Llama 3.2 model enhanced with a robust RAG pipeline for contextual Q&A, multilingual support, and real-time chatbot interactions. It features an advanced orchestrator system, Telegram integration for end-users, and a secure admin dashboard to manage users, control model fine-tuning, and monitor usage. Payments are handled via Stripe, while speech services and website integration provide a complete AI-driven chatbot solution tailored to client data. Deployed on Hugging Face Inference Endpoints, it ensures optimal performance, accuracy, and scalability.
            </>
        ),


    },

];
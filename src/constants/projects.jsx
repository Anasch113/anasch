import {
    EquityHub,
    HidContentApp,
    SessionTactica,
    Rxai,
    SellPredator,
    captify,
    EnglishHub,
    MindPlanner,
    HidBookingTool,


} from "../assets";



export const projects = [

    {
        name: "EquityHub.ai",
        description:
            "A scalable M&A data platform designed to help users find investors and company leads across the U.S. and Canada. Built with React, Node.js, Supabase, and Stripe, the system includes secure authentication, a highly intelligent search system, AI-powered data insights, and a subscription model.",
        image: EquityHub,

    },

    {
        name: "HID Content App",
        description: (
            <>
                <strong>HID Content App</strong> is a MERN-based design marketplace where admins import Figma templates, set editable layers, organize content, and manage users with advanced tools. Users can edit templates on a custom canvas editor, modify text/images, and save or download their designs. The system integrates Figma APIs, Cloudinary, Firebase, HubSpot, and AI NLP features, along with IoT capabilities to push content directly to organizational TV screens. A scalable and modern platform built for real enterprise design workflows.
            </>
        ),
        image: HidContentApp,

    },

    {
        name: "Sesión Táctica",
        description: (
            <>
                <strong>Sesión Táctica</strong> is an interactive web app designed to help young soccer players improve their tactical, technical, physical, and cognitive skills. Each player gets a personalized digital notebook with position-based content, self-assessments, and progress tracking through visual charts. The platform offers secure login, public player profiles, and private evaluation dashboards. Premium content is unlocked through monthly Stripe subscriptions with two tiers available. A built-in AI assistant chatbot guides players with tactical and performance questions. The system also includes a powerful admin dashboard to manage users, subscriptions, content, and player progress tracking.

            </>
        ),
        image: SessionTactica,

    },


    {
        name: "RxAI",

        description: (
            <>
                <strong>RxAI</strong> is an AI-powered health companion that interprets medical reports, prescriptions, and health data into clear, patient-friendly explanations. The platform includes advanced visual analysis for X-ray–type images (educational insights only), along with STT, TTS, multilingual support, and secure payment integration. Built with strict HIPAA-compliant practices, it helps patients and caregivers understand their health with confidence and clarity. This project showcases a modern, user-centric approach to accessible medical guidance.

            </>
        ),
        image: Rxai,

    },


    {
        name: "Sell Predator",

        description: (
            <>
                Sell predator is an AI-powered receptionist designed for sales and customer support teams. It listens to live customer conversations, understands context using AI (via GPT-4), and responds intelligently in real time using synthetic voice (Text-to-Speech). The system integrates with CRMs like HubSpot to display customer information and log interaction data. This MVP aims to deliver a modular, cloud-based web application with a cockpit-style interface and multilingual support.
                It is in development phase, We are currently working on it core pipeline enhancement  but its voice features working properly.

                It also includes the realtime phone integration feature which allows Sell predator to assist users in live calls and RAG intelligence through which users can train the sell predator on there Business related data.

            </>
        ),
        image: SellPredator,

    },


    {
        name: "CaptifyLive",

        description: (
            <>

                Captify is a large-scale <strong>AI-powered productivity marketplace</strong>  offering real-time tools for businesses, legal teams, and corporate environments. The platform provides meeting recording, automated note generation, AI reports, OCR image analysis, and live transcription through its <strong>Captify Copilot</strong>  bot. It supports a wide range of services, including legal videography, court reporting, transcript summarization, file notes, handwriting conversion, and corporate/government captioning workflows. Designed for speed, accuracy, and high-volume use, the system delivers a complete AI-driven workspace for modern professional needs.


            </>
        ),
        image: captify,

    },


    {
        name: " The English Hub",

        description: (
            <>
                <strong>The English Hub</strong> is an interactive learning platform designed to connect instructors and students through a structured, user-friendly environment. It features dedicated dashboards for teachers and learners, secure authentication flows, a teacher application system, and seamless student enrollment. Built with scalability and usability in mind, the platform delivers an organized, engaging experience for English education. This project highlights my ability to build efficient, client-focused web applications.

            </>
        ),
        image: EnglishHub,

    },

    {
        name: " The Mind Planner",

        description: (
            <>
                <strong>The Mind Planner</strong> is a full-stack course platform that enables users to buy, read, and manage their courses with an engaging, step-by-step learning experience. Users can track their lesson progress, complete exercises, save their work, and access audio lectures—all within a modern, intuitive interface. The platform includes a powerful admin dashboard where course creators can build and customize courses, lessons, designs, and components similar to Kajabi. Built with <strong>React.js, Node.js, and Supabase,</strong>  it delivers a scalable, high-performance learning environment. This project showcases a complete, professional-grade e-learning system.

            </>
        ),
        image: MindPlanner,

    },


    {
        name: "HID Booking Tool",

        description: (
            <>
                <strong>HID Booking Tool</strong> is a custom, modular booking system built for the Health & Innovation District Amsterdam (HID), enabling users to reserve offices, meeting rooms, research equipment, podcast studios, and event spaces. The platform features an advanced backend that dynamically checks real-time availability of staff, rooms, and resources, while automatically creating and managing bookings and meetings. It includes deep integrations with <strong> HubSpot CRM, Outlook, ServiceNow, and Mollie </strong> for payments, notifications, and workflow automation. Designed with a scalable architecture in ReactJS, each booking category is delivered as a reusable module for future integration into HID’s mobile campus app. This project showcases a complete enterprise-level booking and workflow automation system.

            </>
        ),
        image: HidBookingTool,

    },



];



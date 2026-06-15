export const profile = {
  name: 'Sai Prasad Reddy Kukudala',
  shortName: 'Sai Prasad',
  location: 'Norman, Oklahoma',
  email: 'kukudalasaiprasad@gmail.com',
  phone: '+1 405 413 6278',
  linkedin: 'https://www.linkedin.com/in/saiprasadkukudala',
  github: 'https://github.com/Saiprasad48',
  resume: '/Sai-Prasad-Reddy-Kukudala-Resume.pdf',
  headline: 'ML, Data Engineering, and Backend-focused Computer Science graduate.',
  summary:
    'I build practical systems that connect data, machine learning models, APIs, databases, and deployment workflows. My work focuses on ML engineering, data science, GenAI/RAG pipelines, MLOps, and AI-focused backend development.',
  availability: 'Open to full-time roles in ML Engineering, Data Engineering, Data Science, and AI-focused Backend Development.'
};

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'Java', 'C', 'C++', 'JavaScript', 'HTML/CSS']
  },
  {
    group: 'Data / ML',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'PyTorch', 'OpenCV']
  },
  {
    group: 'GenAI / NLP / Search',
    items: ['LangChain', 'Hugging Face', 'RAG', 'Embeddings', 'FAISS', 'Vector Search', 'pgvector']
  },
  {
    group: 'Backend / Cloud / Tools',
    items: ['FastAPI', 'REST APIs', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Docker Compose', 'Nginx', 'MLflow', 'Git']
  },
  {
    group: 'Frontend / BI',
    items: ['React.js', 'Vite', 'Axios', 'React Router', 'Recharts', 'Streamlit', 'Power BI']
  }
];

export const featuredProjects = [
  {
    title: 'Smart IT Helpdesk & Asset Management System',
    period: 'Apr 2026 – Jun 2026',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Scikit-learn'],
    summary:
      'Full-stack IT support platform with JWT authentication, role-based access, ticket workflows, asset inventory, user assignment, and analytics dashboards.',
    impact:
      'Integrated TF-IDF and Logistic Regression to classify support tickets into Hardware, Software, Network, Account Access, and Other.',
    github: 'https://github.com/Saiprasad48/smart-it-helpdesk'
  },
  {
    title: 'Customer Churn Prediction with Explainable AI',
    period: 'Jun 2026',
    stack: ['Python', 'SQL', 'XGBoost', 'SHAP', 'Streamlit', 'Power BI', 'Docker'],
    summary:
      'End-to-end churn prediction system using telecom customer data, SQL-based EDA, classification modeling, explainability, and dashboarding.',
    impact:
      'Used SHAP explanations to show customer-level churn probability and the main reasons behind each prediction.',
    github: 'https://github.com/Saiprasad48/customer-churn-prediction-explainability'
  },
  {
    title: 'AI Job Match and Resume Analyzer using RAG',
    period: 'May 2026',
    stack: ['Python', 'LangChain', 'Hugging Face', 'FAISS', 'PostgreSQL', 'Streamlit'],
    summary:
      'RAG-powered resume analyzer that compares resumes against job descriptions and generates match scores, skill gaps, keyword suggestions, and project recommendations.',
    impact:
      'Combined TF-IDF scoring, embeddings, semantic retrieval, and PostgreSQL-backed analysis history.',
    github: 'https://github.com/Saiprasad48/ai-job-match-resume-analyzer'
  },
  {
    title: 'Retail Demand Forecasting with MLOps',
    period: 'Apr 2026 – May 2026',
    stack: ['Python', 'LightGBM', 'MLflow', 'FastAPI', 'PostgreSQL', 'Docker'],
    summary:
      'Sales forecasting pipeline with time-series feature engineering, LightGBM model training, and MLflow experiment tracking.',
    impact:
      'Served real-time predictions through FastAPI and stored API outputs in PostgreSQL using a Dockerized multi-service setup.',
    github: 'https://github.com/Saiprasad48/retail-demand-forecasting-mlops'
  },
  {
    title: 'PostgreSQL-Based Content-Based Image Retrieval',
    period: 'Jan 2026 – May 2026',
    stack: ['PostgreSQL', 'pgvector', 'HNSW', 'ResNet-50', 'Python'],
    summary:
      'PostgreSQL-native image similarity search system using pgvector and HNSW indexing with ResNet-50 embeddings on CIFAR-10.',
    impact:
      'Reduced filtered query latency from 891 ms to 203 ms using adaptive filtered ANN retrieval and compact vector reranking.',
    github: 'https://github.com/Saiprasad48/postgresql-image-retrieval-pgvector'
  },
  {
    title: 'Decentralized Freelance Marketplace',
    period: 'Mar 2025 – Apr 2025',
    stack: ['Solidity', 'React', 'Hardhat', 'IPFS'],
    summary:
      'Blockchain-based freelance platform with Ethereum escrow payments, DAO-based dispute resolution, decentralized file storage, and tokenized reputation.',
    impact:
      'Built a full-stack Web3 workflow connecting smart contracts, frontend interactions, and decentralized storage.',
    github: 'https://github.com/Saiprasad48/decentralized-freelance-marketplace'
  }
];

export const additionalProjects = [
  'Extended Iris Classification',
  'Maze Solver using Q-Learning and Monte Carlo',
  'WSafe - Women Safety Application',
  'Automatic Essay Scoring - Deep Learning'
];

export const education = [
  {
    school: 'University of Oklahoma',
    degree: 'M.S. in Computer Science',
    meta: 'GPA: 3.82/4.00 | Aug 2024 – May 2026 | Norman, OK'
  },
  {
    school: 'Vardhaman College of Engineering',
    degree: 'B.Tech in Computer Science',
    meta: 'GPA: 8.72/10 | Nov 2020 – May 2024 | Hyderabad, India'
  }
];

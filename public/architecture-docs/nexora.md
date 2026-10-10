# Nexora — AI Skill Social & Developer Matching Platform Architecture

**Repository**: [https://github.com/pasha804/NEXORA](https://github.com/pasha804/NEXORA)  
**System Type**: Full-Stack AI Social Network & Vector Skill Taxonomy Platform  
**Backend**: FastAPI (Python 3.12) / Asynchronous PostgreSQL / SQLAlchemy ORM  
**Frontend**: React 19 / TypeScript / Tailwind CSS / Framer Motion  

---

## 1. Architectural Blueprint

```
[ React 19 Client SPA ] <---- WSS / HTTPS ----> [ FastAPI Async Gateway ]
          |                                               |
  (State: Zustand)                                 (JWT Auth & CORS)
          |                                               |
  (Responsive Grid)                                +------+------+
                                                   |             |
                                            [ PostgreSQL ]  [ Vector Store / AI ]
                                            (User Graph)    (Skill Embeddings)
```

## 2. Key Modules
- **Vector Skill Taxonomy Engine**: Ingests developer GitHub profiles & resumes to map multidimensional tech stacks.
- **Collaborative Project Channels**: Real-time room-based WebSocket channels for instant peer collaboration.
- **Asynchronous Task Queue**: Background Celery / AsyncIO workers handling token calculation and social graph indexing.
- **Security & Authorization**: Argon2 password hashing, Bearer JWT rotation, and strict SQL injection mitigation via SQLAlchemy Core.
# Job Connect Database Architecture

## Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ JOB_OFFER : "posts"
    USER ||--o{ APPLICATION : "applies"
    JOB_OFFER ||--o{ APPLICATION : "receives"
    
    %% Moderation System
    USER ||--o{ REPORT : "reports"
    JOB_OFFER ||--o{ REPORT : "is reported"
    
    %% Skill System (Many-to-Many)
    USER ||--o{ USER_SKILL_REL : "possesses"
    JOB_OFFER ||--o{ JOB_OFFER_SKILL_REL : "requires"
    SKILL ||--o{ USER_SKILL_REL : "linked to"
    SKILL ||--o{ JOB_OFFER_SKILL_REL : "linked to"

    USER {
        string email
        string password
        string role "STUDENT, ALUMNI, COMPANY, ADMIN"
        boolean is_admin_validated
        boolean cgu_accepted
        string display_name
        string bio
        string phone
        string cv_url
        string skills_tags
        string website
        string github
        string portfolio
        string logo_url
        boolean is_mentor_available
        boolean is_hidden
    }

    JOB_OFFER {
        int job_id PK
        int author_id FK
        string title
        string type "INTERNSHIP, APPRENTICESHIP, TECH"
        text description
        datetime publication_date
        string status "PENDING, VALIDATED, REJECTED, CLOSED"
        string admin_feedback
    }

    APPLICATION {
        int application_id PK
        int user_id FK
        int job_id FK
        string status "RECEIVED, INTERVIEW, REJECTED, VALIDATED"
        datetime applied_at
        string cv_snapshot_url
        string cover_letter
    }

    REPORT {
        int report_id PK
        int reporter_id FK
        int job_id FK
        string reason "SPAM, SCAM, INAPPROPRIATE"
        text description
        datetime reported_at
        boolean is_processed
    }

    SKILL {
        int skill_id PK
        string name
    }

    USER_SKILL_REL {
        int user_id FK
        int skill_id FK
    }

    JOB_OFFER_SKILL_REL {
        int job_id FK
        int skill_id FK
    }

    CONFIGURATION {
        int id PK
        string legal_key
        text cgu_content
    }
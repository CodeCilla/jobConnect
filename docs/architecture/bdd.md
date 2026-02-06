# Database Architecture

## Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ JOB_OFFER : "posts"
    USER ||--o{ APPLICATION : "applies"
    JOB_OFFER ||--o{ APPLICATION : "receives"

    USER {
        int id
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
        string company_website
        string logo_url
        boolean is_mentor_available
        boolean is_hidden
    }

    JOB_OFFER {
        int id
        int author_id
        string title
        string type "INTERNSHIP, APPRENTICESHIP, TECH"
        text description
        datetime deadline
        string status "PENDING, VALIDATED, CLOSED"
    }

    APPLICATION {
        int id
        int candidate_id
        int job_offer_id
        string status "RECEIVED, INTERVIEW, REJECTED, VALIDATED"
        datetime applied_at
        string cv_snapshot_url
    }

    CONFIGURATION {
        int id
        string legal_key
        text cgu_content
    }
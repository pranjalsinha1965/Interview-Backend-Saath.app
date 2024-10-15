# 1. Database Configuration – (backend/config/db.js)

## This module connects the application to an AWS RDS MySQL database.

**AWS Suggestions**:

1. Use Amazon RDS for managed relational databases.
2. Ensure VPC and security groups are configured properly to allow secure access.
3. Enable automated backups in RDS for disaster recovery.

**Interview-Oriented Question**:

How would you optimize MySQL connections in Node.js for high-traffic applications?

**Answer**: Use connection pooling (already done in the code using mysql.createPool). Connection pools optimize the reuse of database connections, reducing the overhead of establishing connections for each request.


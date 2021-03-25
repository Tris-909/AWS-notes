# AWS

## IAM & EC2 
- IAM ( Identity and Access Management ) 
  - IAM have 3 types : Users, Groups, Roles
  - Root Account should never be used and should never be shared 
  - Users must be created with proper roles
  - IAM is the center of all Amazon Web Services and has a global view
  - Policies are written in JSON
  
 ### Explain Further about 3 types in IAM : 
  - Users are actual users. That's it :) 
  - Groups are a cluster of users grouped by one or many attributes
  - Roles : Decide internal usage within AWS 
  - **Policies** written in JSON will decide users, groups or roles have control of what and not.
  
 ### IAM Thumps Rules you need to know : 
  - One IAM **User** for a physical person
  - One IAM per Application 
  - IAM Credentials should never be SHARED
  - Never touch IAM Root User ever again after initial setup cause It have all the priviledges to everything
  

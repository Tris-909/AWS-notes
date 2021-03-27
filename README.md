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
  
 ### EC2 :
 - EC2 is the hardware that AWS will provide to you to run your server. The more you pay, the stronger your server will be.We called this hardware/server an instance
 - EC2 is a regional service meaning that your server will be based on that region if you decide to create an instance of EC2 there. 
 - EC2 has `Security Groups` to make sure which `www` can connect to it server using `inBound` or exit it server `outBound` or allow them to go in and out using `allow` 
  
 #### Security Groups : 
  - One Security Groups can be used for many instances.
  - Security Groups is also regional 
  - If your application can't connect to the server (time out), It good to look into your security groups for that server.
 
 #### Private and Public IP & Elastic IP
 - There two types of IPS : IPv4 and IPv6 
 - IPv4 is the most common one used across the world Ex: [0-255].[0-255].[0-255].[0-255] . IPv4 is global and is unique. It can be used to geo-located. 
 - IPv6 (private IP) is an unique IP that in one netWork. 
 - Each EC2 Instance will have an private IP to access internal AWS Services and public IP to access to `www`. When you start or stop your EC2 Instance, your public IP will change. If you want to have the same IP everytime. You can use `Elastic IP` for it. 

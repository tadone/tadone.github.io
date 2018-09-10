---
title: "AWS"
---

# AWS CLI
Requirements: Python 2 version 2.6.5+ or Python 3 version 3.3+ **Avoid pip**

## AWS Credentials
``aws configure``

## EC2
**create-key-pair**
``aws ec2 create-key-pair --key-name tadone-ec2 --query 'KeyMaterial' --output text > tadone-ec2.pem``

**describe-instances**
```bash
aws ec2 describe-instances --query 'Reservations[*].Instances[*].[Placement.AvailabilityZone, State.Name, InstanceId]' --output text``

# Modify instances based on query

aws ec2 describe-instances --query 'Reservations[*].Instances[*].[State.Name, InstanceId]' --output text |  # Enter
> grep stopped |
> awk '{print $2}' |
> while read line;
> do aws ec2 modify-instance-attribute --instance-id $line --instance-type '{"Value": "m1.medium"}';
> done
```

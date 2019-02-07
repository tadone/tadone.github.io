---
title: "AWS"
---

# AWS CLI
Requirements: Python 2 version 2.6.5+ or Python 3 version 3.3+ **Avoid pip**

## AWS Credentials
``aws configure``

### Named Profiles
You can configure additional profiles by using aws configure with the ``--profile`` option, or by adding entries to the config and **~/.aws/credentials** file.
```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

[user1]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
```
Each profile uses different credentials—perhaps from different IAM users—and can also use different AWS Regions and output formats.
**~/.aws/config**

```
[default]
region=us-west-2
output=json

[profile user1]
region=us-east-1
output=text
```
::: warning
The credentials file uses a different naming format than the CLI config file for named profiles. Include the prefix "profile" only when configuring a named profile in the config file. Do not use profile when configuring the credentials file.
:::
### Using Profiles with the AWS CLI

To use a named profile, add the --profile profile-name option to your command. The following example lists all of your Amazon EC2 instances using the user1 profile from the previous example files.
``$ aws ec2 describe-instances --profile user2``
To use a named profile for multiple commands, you can avoid specifying the profile in every command by setting the AWS_DEFAULT_PROFILE environment variable at the command line.
``$ export AWS_DEFAULT_PROFILE=user2``

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

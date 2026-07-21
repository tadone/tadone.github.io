---
title: "Azure"
---

# Azure CLI

::: info
Install with Homebrew: `brew install azure-cli`
Find commands with `az find -q rbac`
:::

## Login
```bash
az login # Use browser to enter code and associate the credentials
az login -u <username> -p <password> # Will not work with 2-factor authentication
```
## Set Acount
```bash
az account list --output table # List account names & subscriptions
az account set --subscription "MSI-SWE-CIE-DEV" # Change subscription
az account show --query 'tenantId' -o tsv # Show tenantId

# Create a VM in specific subscription & resource group
az vm create --subscription "My Demos" --resource-group MyGroup --name NewVM --image Ubuntu
```
## Set Cloud
```bash
az cloud list --output table # Show current active cloud (default: AzureCloud)
az cloud set --name AzureUSGovernment # Switch to US Gov Cloud
```
## Locations
```bash
az account list-locations | jq '.[].name' | sort  # list locations
```
## Output Format

|–output|	Description|
|-|-|
|json	| JSON string. This setting is the default.|
|jsonc	|Colorized JSON.|
|table	|ASCII table with keys as column headings.|
|tsv	|Tab-separated values, with no keys|

```bash
# Example
az vm list --out table
az vm list --out tsv | grep RGD | cut -f8
```

## Query
```bash
# Query the array (multiple output) where 2nd field is a field in JSON
az cloud list --query '[].{cloud_name:name, active:isActive}'
```

## ARM Deployment
Use `az group` for deploying arm templates
```bash
# Create a deployment from a remote template file, using parameters from a local JSON file.
az group deployment create -g "MyResourceGroup" --template-uri "https://myresource/azuredeploy.json" --parameters @myparameters.json
# Create a deployment from a local template file, using parameters from a JSON string.
az group deployment create -g "MyResourceGroup" --template-file azuredeploy.json --parameters '{
                                "location": {
                                    "value": "westus"
                                }
                            }'
```

## Resource Group
```bash
az group create -l "westus" -n "MyResourceGroup"    # Create new resource group
az group delete -n "MyResourceGroup"                # Delete resource group
az group delete --name                              # RG Name
                [--no-wait]                         # Don't wait for command to finish
                [--yes]                             # Assume yes
az resource list --resource-group "MyResourceGroup" # List resources in the resource group
az group show --name "MyResourceGroup"              # Get info about resource group
az group export --name "MyResourceGroup"            # Export Resource Group to ARM Template
az group update --name "MyResourceGroup"
    --set tags.Env=Stage tags.Dept=IT               # Tag existing resource group
```

## Users & Roles
```bash
az ad user list -o table                            # List users in Azure AD

az role assignment list -o table                    # List role assignments
az role assignment list | grep 'name\|principalName'# List role assignment and filter for name or principalName

# FIND ALL ASSINGLED ROLES FOR USER
az role assignment list --all --assignee cal085@email.com

# Find if CoreID is assinged to resourc group
az role assignment list --resource-group radio2-dev --output table | grep CAL085
# List all users assigned to resource group
az role assignment list --resource-group radio2-dev --output table
# Grant access to resource group
az role assignment create --role "Contributor" --assignee "CAL085@email.com" --resource-group "radio2-qa"
# Remove access
az role assignment delete --assignee <assignee> --role <role> --resource-group <resource_group>
```
## Key Vault
Requires access policy for data-plane access
```bash
# Set secret
az keyvault secret set --vault-name 'virtualpartnerdev720f1' --name 'SQLPassword' --value 'Pa$$w0rd'

# List secrets
az keyvault secret list --vault-name 'virtualpartnerdev720f1'
```

## Virtual Machines (VM)
```bash
# Add SSH user/key to existing VM
az vm user update -u splunk --ssh-key-value "$(/bin/cat /Users/tadswider/.ssh/id_rsa.pub)" -n "vm_name" -g "resource_group"
```

# Azure DevOps
```bash
# Set env variable in the pipeline (using Linux Agent)
MASTER_IP="$(az vm list-ip-addresses -g $RG_NAME -n cie-splunk-master-dev --query "[].virtualMachine.network.privateIpAddresses[0]" -o tsv)"
echo "##vso[task.setvariable variable=IPADDRESS;]$MASTER_IP"
```

---
title: "Azure"
---

# Azure CLI
---
Install with Homebrew: `brew install azure-cli`

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

## Key Vault
Requires access policy for data-plane access
```bash
# Set secret
az keyvault secret set --vault-name 'virtualpartnerdev720f1' --name 'SQLPassword' --value 'Pa$$w0rd'

# List secrets
az keyvault secret list --vault-name 'virtualpartnerdev720f1'
```

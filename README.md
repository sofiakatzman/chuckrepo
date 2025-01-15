# **Script Template Project**

This template provides a framework for creating executable scripts. 

---

## **Setup Instructions**

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- A text editor or IDE (e.g., VS Code)

---


### 2. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/sofiakatzman/chucksetup.git 
cd chucksetup
```
---

### 3. Install Dependencies
```bash
npm install
```

### 4. Project Structure
- main.js: main entry point for interacting with the API
- package.json: contains your project's dependencies 

### 5. Troubleshooting
- If you encounter issues with dotenv, ensure it is installed
```bash
npm install dotenv
```

### 6. Running Scripts
- To run scripts, execute the command below from the root directory. Replace /script-name/ and /your-parameters/ with the appropriate script name and parameters.

```bash
node main.js /script-name/ /your-parameters/
```

## Script Directory
| Script Name   | Script Purpose  | Script Parameters  | Sample Command             |
|---------------|-----------------|--------------------|----------------------------|
| hello         | sample script   | your name          | node main.js hello sofia   |

### 7. Adding Scripts
To add a new script to the project, follow the steps below:

---

#### **Step 1: Create the Script File**
1. Navigate to the `scripts` folder.
2. Create a new file for your script. For example, to create a script named `hello`, create a file called `hello.js`.
3. Write your script function in the newly created file. Here's an example for the `hello` script:
   ```javascript
   // scripts/test.js
   export const hello = async (user) => {
       console.log(`hello ${user}`);
   };
    ```

#### **Step 2: Import the Script in main.js
1. Open the main.js file in the root directory.
2. Import your script at the top of the file. For example:
    ```javascript
    import { test } from './scripts/test.js';
    ```

#### **Step 3: Add the Script to the Switch Statement
1. Locate the switch statement in main.js.
2. Add a new case for your script. This ensures that the script can be run using the CLI. For example:
    ```javascript
    switch (script) {
        case 'test':
            test(parameter || 'user'); // Pass parameters to your script
            break;
        default:
            console.error('Unknown script. General usage: node main.js <script> <parameter>');
            console.error('Available scripts: test');
            console.error('Sample command: node main.js test sofia');
    }
    ```
    
#### **Step 4: Test Your Script
1. Save all changes.
2. Run your script from the root directory using the node command:
```bash
Copy code
node main.js test sofia
Replace test with your script name and sofia with the parameter you want to pass.
```
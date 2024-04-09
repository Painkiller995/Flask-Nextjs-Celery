### Backend Setup:

1. **Install virtualenv**:
   ```bash
   pip install virtualenv
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv env
   ```

3. **Activate the virtual environment**:
   - On Windows:
     ```bash
     env\Scripts\activate
     ```
   - On Unix or MacOS:
     ```bash
     source env/bin/activate
     ```

4. **Navigate to your backend directory**:
   ```bash
   cd backend
   ```

5. **Install backend dependencies**:
   ```bash
   pip install -r requirements/local.txt  # Use production.txt for production mode
   ```

6. **Run the Flask application**:
   ```bash
   flask run
   ```

### Frontend Setup:

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install frontend dependencies using Yarn**:
   ```bash
   yarn
   ```

3. **Run the frontend server for local development**:
   ```bash
   yarn dev
   ```
# Geodetic Firm Web Application

This web application is designed for a geodetic firm to manage employee information, project locations, work assignments, historical records, and statistics on employee visits to projects.

## Features

- **Employee Management**: Add, edit, and view employee details.
- **Project Management**: Manage project information, including locations and details.
- **Calendar Integration**: Track work assignments for employees at specific project locations.
- **Historical Records**: View historical data of employee locations and work assignments.
- **Statistics Dashboard**: Display statistics on employee visits to various projects.

## Project Structure

```
geodetic-firm-webapp
├── src
│   ├── components
│   │   ├── Employee
│   │   ├── Project
│   │   ├── Calendar
│   │   ├── History
│   │   └── Statistics
│   ├── pages
│   │   ├── Employees.tsx
│   │   ├── Projects.tsx
│   │   ├── Calendar.tsx
│   │   ├── History.tsx
│   │   └── Statistics.tsx
│   ├── services
│   │   ├── employeeService.ts
│   │   ├── projectService.ts
│   │   ├── calendarService.ts
│   │   └── statisticsService.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd geodetic-firm-webapp
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
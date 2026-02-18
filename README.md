# web2-monorepo

📌 Project Goal

The goal of this project is to study how to work with Lerna and understand the principles of building a monorepository using:

- Yarn Workspaces
- Lerna
- Next.js
- TypeScript

This work was done in preparation for transforming an existing project into a monorepository in the future.

🏗 Project Architecture

The project is structured as a monorepository.

Directory structure:
web2-monorepo/
│
├── packages/
│   ├── ui/        # UI components
│   ├── utils/     # Utility functions
│   └── web/       # Next.js application
│
├── lerna.json
├── package.json
├── yarn.lock
└── Makefile

📦 Packages
1️⃣ web

Main Next.js application
Uses components from ui
Uses functions from utils

2️⃣ ui

Reusable React components
Written in TypeScript
Imported into the Next.js application

3️⃣ utils

Helper functions
Written in TypeScript
Used inside the Next.js application

⚙ Technologies Used

- Yarn Workspaces — dependency management inside the monorepo
- Lerna — package management
- Next.js — frontend application framework
- TypeScript — static typing across all packages

🚀 Current Functionality

At the moment:
- The project can be started
- A website will be displayed
- The page shows:
    - the current date
    - a button (without logic)

The project also includes a Makefile to simplify running commands.

▶ Running the Project

Install dependencies: make install

Start project: make start

Clean project: make clean

🎯 Project Tasks

The following tasks are planned:

- Set up the Next.js server
- Implement reusable components
- Configure a proper monorepository using Lerna
- Set up inter-package dependencies
- Improve project structure and build process

📚 What This Project Demonstrates

- How Lerna works
- How Yarn Workspaces are configured
- How to organize inter-package imports
- How monorepo architecture is structured
- How to connect Next.js with internal packages
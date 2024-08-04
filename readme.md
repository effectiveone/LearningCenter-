# Flashcard Learning Program

## Overview

This is a flashcard learning program designed to help users learn and retain information through customizable flashcard sets. Users can create their own categories, levels, and languages, enabling a personalized learning experience. The program tracks user progress and performance to facilitate effective learning.

## Features

- **Custom Categories**: Users can create and manage their own categories for flashcards.
- **Leveling System**: Flashcards can be organized into different levels to structure the learning process.
- **Multi-language Support**: Users can create and learn flashcards in various languages.
- **User Progress Tracking**: The application tracks user progress and performance over time.

## Technology Stack

- **Backend**: Built with NestJS and TypeScript.
- **Frontend**: Developed using React and TypeScript.
- **Database**: Utilizes MongoDB as the data source.
- **Communication**: Employs GraphQL and REST API for communication between the backend and frontend.
- **Virtual Environment**: Docker is used to manage the application's virtual environment.

## Database Schema

The database schema is defined using Prisma ORM and consists of the following models:

- **Flashcard**: Represents individual flashcards.
- **Language**: Represents languages that flashcards can be categorized into.
- **Level**: Represents levels that flashcards can be categorized into.
- **Category**: Represents categories that flashcards can be categorized into.
- **UserSet**: Represents sets of flashcards created by users.
- **UserProgress**: Tracks user progress and performance with individual flashcards.
- **User**: Represents users of the application.

### Prisma Schema Definition

````prisma
datasource db {
  provider = "mongodb"
  url      = env("DB_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Flashcard {
  id         String   @id @default(uuid())
  languageId String
  levelId    String
  categoryId String
  language   Language @relation(fields: [languageId], references: [id])
  level      Level    @relation(fields: [levelId], references: [id])
  category   Category @relation(fields: [categoryId], references: [id])
  userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model Language {
  id        String      @id @default(uuid())
  name      String
  flashcards Flashcard[]
  userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model Level {
  id        String      @id @default(uuid())
  name      String
  flashcards Flashcard[]
  userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model Category {
  id        String      @id @default(uuid())
  name      String
  flashcards Flashcard[]
  userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model UserSet {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  name      String?
  user      User?    @relation(fields: [userId], references: [id])
  userId    String?  @db.ObjectId
}

model UserProgress {
  id               String     @id @default(auto()) @map("_id") @db.ObjectId
  createdAt        DateTime   @default(now())
  updatedAt        DateTime   @updatedAt
  correctAnswers   Int?
  incorrectAnswers Int?
  user             User?      @relation(fields: [userId], references: [id])
  userId           String?    @db.ObjectId
  flashcard        Flashcard? @relation(fields: [flashcardId], references: [id])
  flashcardId      String?    @db.ObjectId
  category         Category?  @relation(fields: [categoryId], references: [id])
  categoryId       String?    @db.ObjectId
  level            Level?     @relation(fields: [levelId], references: [id])
  levelId          String?    @db.ObjectId
  language         Language?  @relation(fields: [languageId], references: [id])
  languageId       String?    @db.ObjectId
}

model User {
  id             String         @id @default(auto()) @map("_id") @db.ObjectId
  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @updatedAt
  firstName      String?
  lastName       String?
  username       String         @unique
  email          String?        @unique
  password       String
  roles          Json
  userProgresses UserProgress[]
  userSets       UserSet[]
}```


### Prerequisites

- **Docker**
- **Node.js**
- **MongoDB**
- **Prisma CLI**

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo/flashcard-learning.git
    cd flashcard-learning
    ```

2. **Set up environment variables:**
    Create a `.env` file in the root directory and add the necessary environment variables:

    ```bash
    DB_URL=your_mongodb_connection_string
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run Docker containers:**

    ```bash
    docker-compose up -d
    ```

5. **Run Prisma migrations:**

    ```bash
    npx prisma migrate deploy
    ```

6. **Start the backend server:**

    ```bash
    npm run start:dev
    ```

7. **Start the frontend server:**

    ```bash
    cd frontend
    npm install
    npm start
    ```

### Default Admin Account

- **Username:** admin
- **Password:** admin

## Contribution

This is an open-source project, and contributions are welcome. Please follow the contribution guidelines in `CONTRIBUTING.md`.

## TODO

- **Implement `UserProgress` and `UserRevision` models.**
- **Expand the language database.**
- **Enhance the core learning logic and user interface.**

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
````

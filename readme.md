<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcard Learning Program - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }

        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 3px;
        }

        .code-block {
            margin: 20px 0;
        }
    </style>

</head>

<body>
    <h1>Flashcard Learning Program</h1>

    <h2>Overview</h2>
    <p>This is a flashcard learning program designed to help users learn and retain information through customizable flashcard sets. Users can create their own categories, levels, and languages, enabling a personalized learning experience. The program tracks user progress and performance to facilitate effective learning.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Custom Categories:</strong> Users can create and manage their own categories for flashcards.</li>
        <li><strong>Leveling System:</strong> Flashcards can be organized into different levels to structure the learning process.</li>
        <li><strong>Multi-language Support:</strong> Users can create and learn flashcards in various languages.</li>
        <li><strong>User Progress Tracking:</strong> The application tracks user progress and performance over time.</li>
    </ul>

    <h2>Technology Stack</h2>
    <ul>
        <li><strong>Backend:</strong> Built with NestJS and TypeScript.</li>
        <li><strong>Frontend:</strong> Developed using React and TypeScript.</li>
        <li><strong>Database:</strong> Utilizes MongoDB as the data source.</li>
        <li><strong>Communication:</strong> Employs GraphQL and REST API for communication between the backend and frontend.</li>
        <li><strong>Virtual Environment:</strong> Docker is used to manage the application's virtual environment.</li>
    </ul>

    <h2>Database Schema</h2>
    <p>The database schema is defined using Prisma ORM and consists of the following models:</p>
    <ul>
        <li><strong>Flashcard:</strong> Represents individual flashcards.</li>
        <li><strong>Language:</strong> Represents languages that flashcards can be categorized into.</li>
        <li><strong>Level:</strong> Represents levels that flashcards can be categorized into.</li>
        <li><strong>Category:</strong> Represents categories that flashcards can be categorized into.</li>
        <li><strong>UserSet:</strong> Represents sets of flashcards created by users.</li>
        <li><strong>UserProgress:</strong> Tracks user progress and performance with individual flashcards.</li>
        <li><strong>User:</strong> Represents users of the application.</li>
    </ul>

    <h3>Prisma Schema Definition</h3>
    <div class="code-block">
        <pre>

<code>datasource db {
provider = "mongodb"
url = env("DB_URL")
}

generator client {
provider = "prisma-client-js"
}

model Flashcard {
id String @id @default(uuid())
languageId String
levelId String
categoryId String
language Language @relation(fields: [languageId], references: [id])
level Level @relation(fields: [levelId], references: [id])
category Category @relation(fields: [categoryId], references: [id])
userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model Language {
id String @id @default(uuid())
name String
flashcards Flashcard[]
userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model Level {
id String @id @default(uuid())
name String
flashcards Flashcard[]
userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model Category {
id String @id @default(uuid())
name String
flashcards Flashcard[]
userProgresses UserProgress[] // One-to-Many relation with UserProgress
}

model UserSet {
id String @id @default(auto()) @map("\_id") @db.ObjectId
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
name String?
user User? @relation(fields: [userId], references: [id])
userId String? @db.ObjectId
}

model UserProgress {
id String @id @default(auto()) @map("\_id") @db.ObjectId
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
correctAnswers Int?
incorrectAnswers Int?
user User? @relation(fields: [userId], references: [id])
userId String? @db.ObjectId
flashcard Flashcard? @relation(fields: [flashcardId], references: [id])
flashcardId String? @db.ObjectId
category Category? @relation(fields: [categoryId], references: [id])
categoryId String? @db.ObjectId
level Level? @relation(fields: [levelId], references: [id])
levelId String? @db.ObjectId
language Language? @relation(fields: [languageId], references: [id])
languageId String? @db.ObjectId
}

model User {
id String @id @default(auto()) @map("\_id") @db.ObjectId
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
firstName String?
lastName String?
username String @unique
email String? @unique
password String
roles Json
userProgresses UserProgress[]
userSets UserSet[]
}</code>
</pre>
</div>

    <h2>Getting Started</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Docker</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Prisma CLI</li>
    </ul>

    <h3>Installation</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <div class="code-block">
                <pre><code>git clone https://github.com/your-repo/flashcard-learning.git

cd flashcard-learning</code></pre>
</div>
</li>
<li><strong>Set up environment variables:</strong>
<p>Create a <code>.env</code> file in the root directory and add the necessary environment variables:</p>
<div class="code-block">
<pre><code>DB_URL=your_mongodb_connection_string</code></pre>
</div>
</li>
<li><strong>Install dependencies:</strong>
<div class="code-block">
<pre><code>npm install</code></pre>
</div>
</li>
<li><strong>Run Docker containers:</strong>
<div class="code-block">
<pre><code>docker-compose up -d</code></pre>
</div>
</li>
<li><strong>Run Prisma migrations:</strong>
<div class="code-block">
<pre><code>npx prisma migrate deploy</code></pre>
</div>
</li>
<li><strong>Start the backend server:</strong>
<div class="code-block">
<pre><code>npm run start:dev</code></pre>
</div>
</li>
<li><strong>Start the frontend server:</strong>
<div class="code-block">
<pre><code>cd frontend
npm install
npm start</code></pre>
</div>
</li>
</ol>

    <h3>Default Admin Account</h3>
    <ul>
        <li><strong>Username:</strong> admin</li>
        <li><strong>Password:</strong> admin</li>
    </ul>

    <h2>Contribution</h2>
    <p>This is an open-source project, and contributions are welcome. Please follow the contribution guidelines in <code>CONTRIBUTING.md</code>.</p>

    <h2>TODO</h2>
    <ul>
        <li>Implement <code>UserProgress</code> and <code>UserRevision</code> models.</li>
        <li>Expand the language database.</li>
        <li>Enhance the core learning logic and user interface.</li>
    </ul>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for more details.</p

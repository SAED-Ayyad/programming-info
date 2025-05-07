import React, { useState } from 'react';
import { Book, Code2, ChevronRight, Languages, Brain, ChevronDown, BookOpen, Lightbulb, PenTool as Tool, Bug, Database, Cloud, Lock, Puzzle, Users, Rocket } from 'lucide-react';

interface Language {
  name: string;
  description: string;
  codeExample: string;
  advantages: string[];
  useCases: string[];
}

interface Chapter {
  title: string;
  icon: React.ReactNode;
  content: string;
  subchapters: {
    title: string;
    content: string;
  }[];
}

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedLanguage, setExpandedLanguage] = useState<string | null>(null);
  const [currentChapter, setCurrentChapter] = useState(0);

  const languages: Language[] = [
    {
      name: "JavaScript",
      description: "A versatile language that powers the modern web. JavaScript is essential for creating interactive websites and can now be used for both frontend and backend development through Node.js.",
      advantages: [
        "Runs in every browser",
        "Large ecosystem of libraries",
        "Full-stack development capability",
        "Active community support",
        "Rich frameworks like React, Vue, and Angular"
      ],
      useCases: [
        "Web Applications",
        "Server-side Applications",
        "Mobile Development",
        "Desktop Applications",
        "Browser Extensions"
      ],
      codeExample: `// Modern JavaScript Features
// 1. Async/Await
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// 2. Class Implementation
class UserManager {
  constructor() {
    this.users = new Map();
  }

  addUser(id, name) {
    this.users.set(id, { name, createdAt: new Date() });
  }

  getUser(id) {
    return this.users.get(id);
  }
}`
    },
    {
      name: "Python",
      description: "Known for its simplicity and readability, Python has become one of the most popular programming languages, especially in data science and machine learning.",
      advantages: [
        "Easy to learn and read",
        "Extensive standard library",
        "Strong scientific computing libraries",
        "Cross-platform compatibility",
        "Versatile application domains"
      ],
      useCases: [
        "Data Science",
        "Machine Learning",
        "Web Development",
        "Automation",
        "Scientific Computing"
      ],
      codeExample: `# Python Modern Practices
import dataclasses
from typing import List, Optional

@dataclasses.dataclass
class Student:
    name: str
    age: int
    grades: List[float]
    address: Optional[str] = None

    def calculate_average(self) -> float:
        return sum(self.grades) / len(self.grades)

    @property
    def is_passing(self) -> bool:
        return self.calculate_average() >= 60.0

# Using Type Hints and Context Managers
def process_student_data(filename: str) -> List[Student]:
    students = []
    with open(filename, 'r') as file:
        for line in file:
            name, age, *grades = line.strip().split(',')
            students.append(Student(
                name=name,
                age=int(age),
                grades=[float(g) for g in grades]
            ))
    return students`
    },
    {
      name: "Java",
      description: "A strongly-typed, object-oriented programming language known for its reliability and scalability. Popular in enterprise applications and Android development.",
      advantages: [
        "Platform independence",
        "Strong type system",
        "Excellent tooling",
        "Enterprise-ready",
        "Large developer community"
      ],
      useCases: [
        "Enterprise Applications",
        "Android Development",
        "Cloud Applications",
        "Microservices",
        "Big Data Processing"
      ],
      codeExample: `// Modern Java Features
import java.util.List;
import java.util.stream.Collectors;

public class ModernJavaExample {
    record Person(String name, int age) {}  // Record class

    public List<String> processNames(List<Person> people) {
        return people.stream()
            .filter(person -> person.age() >= 18)
            .map(Person::name)
            .map(String::toUpperCase)
            .collect(Collectors.toList());
    }

    public void demonstratePatternMatching(Object obj) {
        if (obj instanceof String str) {  // Pattern matching
            System.out.println(str.toUpperCase());
        }
    }

    public String switchExpression(String day) {
        return switch (day) {  // Switch expression
            case "MONDAY", "FRIDAY" -> "Working day";
            case "SATURDAY", "SUNDAY" -> "Weekend";
            default -> "Unknown day";
        };
    }
}`
    }
  ];

  const chapters: Chapter[] = [
    {
      title: "Foundations of Programming",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      content: "Understanding the core concepts of programming is essential for becoming a proficient developer. This chapter covers fundamental principles that apply across all programming languages.",
      subchapters: [
        {
          title: "Computational Thinking",
          content: "Learn how to break down complex problems into smaller, manageable pieces. Develop analytical thinking skills essential for programming."
        },
        {
          title: "Data Structures and Algorithms",
          content: "Explore the building blocks of software: arrays, linked lists, trees, and fundamental algorithms for sorting and searching."
        },
        {
          title: "Programming Paradigms",
          content: "Understand different approaches to programming: procedural, object-oriented, functional, and declarative programming."
        }
      ]
    },
    {
      title: "Software Design Principles",
      icon: <Tool className="w-6 h-6 text-indigo-600" />,
      content: "Good software design is crucial for maintaining and scaling applications. Learn the principles that guide professional software development.",
      subchapters: [
        {
          title: "SOLID Principles",
          content: "Master the five fundamental principles of object-oriented design that make software more understandable, flexible, and maintainable."
        },
        {
          title: "Design Patterns",
          content: "Learn common solutions to recurring problems in software design, including creational, structural, and behavioral patterns."
        },
        {
          title: "Clean Code Practices",
          content: "Discover techniques for writing code that is easy to understand, test, and maintain."
        }
      ]
    },
    {
      title: "Modern Development Practices",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />,
      content: "Stay current with contemporary software development practices that improve code quality and team collaboration.",
      subchapters: [
        {
          title: "Version Control with Git",
          content: "Learn to track and manage code changes effectively using Git and collaborative development workflows."
        },
        {
          title: "Test-Driven Development",
          content: "Understand how to write tests first and use them to drive the design and implementation of your code."
        },
        {
          title: "Continuous Integration/Deployment",
          content: "Explore automated testing and deployment pipelines that ensure code quality and rapid delivery."
        }
      ]
    },
    {
      title: "Web Development",
      icon: <Cloud className="w-6 h-6 text-indigo-600" />,
      content: "Master the technologies and practices required for modern web development.",
      subchapters: [
        {
          title: "Frontend Development",
          content: "Learn HTML, CSS, JavaScript, and modern frameworks for building responsive user interfaces."
        },
        {
          title: "Backend Development",
          content: "Understand server-side programming, APIs, and database integration."
        },
        {
          title: "Web Security",
          content: "Explore common security vulnerabilities and best practices for protecting web applications."
        }
      ]
    },
    {
      title: "Database Design",
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      content: "Learn how to design and manage databases effectively for your applications.",
      subchapters: [
        {
          title: "Relational Databases",
          content: "Master SQL and understand how to design efficient database schemas."
        },
        {
          title: "NoSQL Databases",
          content: "Explore non-relational databases and their use cases in modern applications."
        },
        {
          title: "Data Modeling",
          content: "Learn techniques for modeling complex data relationships and optimizing database performance."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Book className="w-8 h-8" />
            <h1 className="text-2xl font-bold">How to Be a Good Programmer</h1>
          </div>
          <p className="mt-2 text-indigo-100">By Saed I. S. Ayyad</p>
          <p className="mt-1 text-sm text-indigo-200">A comprehensive guide to modern software development</p>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={"py-4 px-3 border-b-2 " + (
                activeTab === 'overview'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              )}
            >
              Book Contents
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={"py-4 px-3 border-b-2 " + (
                activeTab === 'languages'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              )}
            >
              Programming Languages
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === 'overview' ? (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-indigo-600" />
                <h2 className="text-xl font-semibold">Book Overview</h2>
              </div>
              <p className="text-gray-600 mb-8">
                This comprehensive guide will take you through the journey of becoming a proficient programmer,
                covering everything from fundamental concepts to advanced software development practices.
                Whether you're just starting or looking to enhance your skills, this book provides the knowledge
                and practical insights needed to succeed in the field of software development.
              </p>
              <div className="space-y-6">
                {chapters.map((chapter, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      {chapter.icon}
                      <h3 className="text-lg font-medium">{chapter.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{chapter.content}</p>
                    <div className="space-y-3 ml-6">
                      {chapter.subchapters.map((subchapter, subIndex) => (
                        <div key={subIndex} className="border-l-2 border-indigo-200 pl-4">
                          <h4 className="text-md font-medium mb-1">{subchapter.title}</h4>
                          <p className="text-sm text-gray-600">{subchapter.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <Languages className="w-6 h-6 text-indigo-600" />
                <h2 className="text-xl font-semibold">Programming Languages</h2>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="border rounded-lg">
                    <button
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                      onClick={() => setExpandedLanguage(expandedLanguage === lang.name ? null : lang.name)}
                    >
                      <div className="flex items-center gap-3">
                        <Code2 className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      {expandedLanguage === lang.name ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {expandedLanguage === lang.name && (
                      <div className="px-4 py-3 border-t">
                        <p className="text-gray-600 mb-4">{lang.description}</p>
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Advantages</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {lang.advantages.map((advantage, index) => (
                              <li key={index}>{advantage}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Common Use Cases</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {lang.useCases.map((useCase, index) => (
                              <li key={index}>{useCase}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Code Example</h4>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <code>{lang.codeExample}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
import React from 'react'

const QuizPage = () => {
  return (
    <div className="min-h-screen flex flex-col mt-16 bg-grayLight text-primary px-4">
      <h1 className="text-3xl font-bold mb-2">Quiz Page</h1>
      <p className="mb-6 text-lg text-gray-700">
        Welcome to the Quiz Page! This page is accessible only to students.
      </p>
      {/* Quiz content goes here */}
    </div>
  )
}

export default QuizPage;
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowRight01Icon,
  ArrowLeft01Icon,
  CheckmarkCircle02Icon,
  SparklesIcon,
  ReloadIcon
} from '@hugeicons/core-free-icons';

interface Question {
  id: number;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  badge: string;
  bgClass: string;
  borderClass: string;
  accentColor: 'green' | 'amber';
  questions: Question[];
}

const quizzes: Quiz[] = [
  {
    id: 'greetings',
    title: 'Greetings Quiz (ÌKÍNI)',
    description: 'Test your understanding of showing respect, day greetings, and the cultural context of Ìkíni.',
    badge: 'Greetings Level 1',
    bgClass: 'bg-green-50/20',
    borderClass: 'border-green-100',
    accentColor: 'green',
    questions: [
      {
        id: 1,
        question: "Which word is the respectful way to say 'Good morning' to an elder, parent, or teacher?",
        choices: ["Káàárọ̀", "Ẹ káàárọ̀", "Ẹ káàsán", "Pẹlẹ o"],
        answer: "Ẹ káàárọ̀",
        explanation: "Ẹ káàárọ̀ is respectful because of the prefix 'Ẹ', which is used to show honor and politeness to elders."
      },
      {
        id: 2,
        question: "What does the greeting 'Ẹ kúalẹ́' translate to?",
        choices: ["Good morning", "Good afternoon", "Good evening", "Hello"],
        answer: "Good evening",
        explanation: "Ẹ kúalẹ́ is the polite, respectful evening greeting used as the day wind downs."
      },
      {
        id: 3,
        question: "If you want to say 'Hello' politely to a group of people, which greeting is best?",
        choices: ["Pẹlẹ o", "Káàárọ̀", "Ẹ n lẹ o", "Ẹ káàsán"],
        answer: "Ẹ n lẹ o",
        explanation: "Ẹ n lẹ o is used to politely say hello to an elder or to multiple people simultaneously."
      },
      {
        id: 4,
        question: "What does the prefix 'Ẹ' represent in Yoruba greetings?",
        choices: ["Morning time", "Respect and politeness", "A question", "Goodbye"],
        answer: "Respect and politeness",
        explanation: "Adding 'Ẹ' before verbs or greetings marks honor, respect, and politeness toward elders and authorities."
      }
    ]
  },
  {
    id: 'classroom',
    title: 'Classroom Names (ǸKAN KÍLÁÁSÌ)',
    description: 'Challenge yourself to identify books, writing instruments, desks, and chairs in Yoruba.',
    badge: 'Classroom Level 1',
    bgClass: 'bg-amber-50/20',
    borderClass: 'border-amber-100',
    accentColor: 'amber',
    questions: [
      {
        id: 1,
        question: "What is the Yoruba word for 'Book'?",
        choices: ["Kálà", "Àga", "Ìwé", "Àpótí"],
        answer: "Ìwé",
        explanation: "Ìwé refers to any book, notebook, or literature."
      },
      {
        id: 2,
        question: "If a teacher says 'Write with a Kálà', what item should you pick up?",
        choices: ["A chair", "A pen or pencil", "A desk", "A chalkboard"],
        answer: "A pen or pencil",
        explanation: "Kálà means a pen, pencil, or writing instrument."
      },
      {
        id: 3,
        question: "What does the word 'Àga' mean in a classroom?",
        choices: ["Chalkboard", "Chair", "Desk", "Classroom"],
        answer: "Chair",
        explanation: "Àga is a chair. You sit on an Àga to learn!"
      },
      {
        id: 4,
        question: "Which of the following is a direct loanword from English?",
        choices: ["Ìwé", "Àpótí", "Kíláásì", "Àga"],
        answer: "Kíláásì",
        explanation: "Kíláásì is the phonetic adaptation of the English word 'class' or 'classroom'."
      }
    ]
  }
];

export default function QuizSection() {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const activeQuiz = quizzes.find((q) => q.id === selectedQuizId);
  const currentQuestion = activeQuiz?.questions[currentQuestionIdx];

  const handleSelectQuiz = (quizId: string) => {
    setSelectedQuizId(quizId);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleSelectAnswer = (choice: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(choice);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;
    
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQuestion?.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!activeQuiz) return;
    
    const nextIdx = currentQuestionIdx + 1;
    if (nextIdx < activeQuiz.questions.length) {
      setCurrentQuestionIdx(nextIdx);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleExitQuiz = () => {
    setSelectedQuizId(null);
  };

  // Score feedback messages
  const getScoreFeedback = (pct: number) => {
    if (pct === 100) return { title: 'Gbayi! (Outstanding!)', text: 'You are a Yoruba Star! You got every question right. 🌟' };
    if (pct >= 75) return { title: 'Ẹ kúṣẹ́! (Great job!)', text: 'Excellent work! You have mastered the core of this lesson. 👏🏾' };
    return { title: 'Ẹ gbìyànjú! (Keep trying!)', text: 'You are getting closer! Review the episode vocabulary and try again. 💪🏾' };
  };

  return (
    <section className="py-16 md:py-[100px] bg-white overflow-hidden scroll-mt-20" id="quizzes">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* State 1: Quiz Selection Interface */}
        {!selectedQuizId && (
          <div>
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-amber-50 text-amber-700 border border-amber-100 mb-4">
                <HugeiconsIcon icon={SparklesIcon} size={12} className="text-amber-500" />
                Practice Hub
              </span>
              <h2 className="font-heading-two text-[30px] md:text-[44px] text-gray-950 leading-[1.1] mb-5">
                Interactive <span className="text-green-600">Digital Quizzes</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Access quick challenges designed to reinforce the topics you learned in our media episodes. Test your knowledge, earn points, and build confidence!
              </p>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {quizzes.map((quiz) => (
                <motion.div
                  key={quiz.id}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)' }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className={`p-6 sm:p-8 rounded-[24px] border ${quiz.borderClass} ${quiz.bgClass} flex flex-col items-start gap-4 text-left relative overflow-hidden`}
                >
                  {/* Backdrop glowing effect */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full filter blur-2xl opacity-20 pointer-events-none -z-10 ${
                    quiz.accentColor === 'green' ? 'bg-green-600' : 'bg-amber-500'
                  }`} />

                  <span className={`inline-block font-heading text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    quiz.accentColor === 'green' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {quiz.badge}
                  </span>

                  <h3 className="font-heading text-lg sm:text-xl text-gray-950 font-bold leading-tight">
                    {quiz.title}
                  </h3>

                  <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed min-h-[48px]">
                    {quiz.description}
                  </p>

                  <div className="flex gap-2.5 items-center text-[11px] text-gray-400 font-semibold mb-2">
                    <span>{quiz.id === 'greetings' ? '10 Questions' : '5 Questions'}</span>
                    <span>•</span>
                    <span>Instant Feedback</span>
                  </div>

                  <Button
                    asChild
                    className={`mt-auto w-full rounded-full py-3 h-auto font-heading text-xs font-semibold shadow-none border-none cursor-pointer transition-all duration-300 ${
                      quiz.accentColor === 'green'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-amber-500 hover:bg-amber-600 text-white'
                    }`}
                  >
                    <a
                      href={quiz.id === 'greetings' ? 'https://wayground.com/join?gc=17731948' : 'https://wayground.com/join?gc=56021356'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Challenge
                      <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* State 2: Active Question Form Panel */}
        {selectedQuizId && activeQuiz && currentQuestion && !quizFinished && (
          <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-gray-50 border border-gray-100 rounded-[28px] shadow-sm text-left">
            {/* Header info */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleExitQuiz}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-900 bg-transparent border-none cursor-pointer transition-colors"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={14} />
                <span>Exit Quiz</span>
              </button>
              <span className="font-heading text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                Question {currentQuestionIdx + 1} of {activeQuiz.questions.length}
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mb-8">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  activeQuiz.accentColor === 'green' ? 'bg-green-600' : 'bg-amber-500'
                }`}
                style={{ width: `${((currentQuestionIdx + 1) / activeQuiz.questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="font-heading text-lg sm:text-xl md:text-[22px] text-gray-950 font-normal leading-snug mb-8">
              {currentQuestion.question}
            </h3>

            {/* Multiple Choice Cards */}
            <div className="flex flex-col gap-3.5 mb-8">
              {currentQuestion.choices.map((choice) => {
                const isSelected = selectedAnswer === choice;
                const isCorrect = choice === currentQuestion.answer;
                
                let btnStyle = 'border-gray-100 hover:border-gray-300 bg-white';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'border-green-500 bg-green-50/50 text-green-950';
                  } else if (isSelected) {
                    btnStyle = 'border-red-500 bg-red-50/50 text-red-950';
                  } else {
                    btnStyle = 'border-gray-100 bg-white/70 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyle = activeQuiz.accentColor === 'green'
                    ? 'border-green-600 bg-green-50/20 text-green-950'
                    : 'border-amber-500 bg-amber-50/20 text-amber-950';
                }

                return (
                  <button
                    key={choice}
                    onClick={() => handleSelectAnswer(choice)}
                    disabled={isAnswerSubmitted}
                    className={`p-4 rounded-xl border text-left font-heading text-[14px] font-medium transition-all duration-300 w-full flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{choice}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <span className="text-green-600 flex items-center shrink-0">
                        <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />
                      </span>
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <span className="text-red-500 font-bold shrink-0 text-sm mr-0.5">✕</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box on submit */}
            <AnimatePresence>
              {isAnswerSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-white border border-gray-150 text-[12.5px] leading-relaxed text-gray-600 mb-8"
                >
                  <strong className="text-gray-900 block mb-1">Learning Tip:</strong>
                  {currentQuestion.explanation}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Bar */}
            <div className="flex justify-end pt-4 border-t border-gray-100">
              {!isAnswerSubmitted ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className={`rounded-full px-6 py-2.5 h-auto font-heading text-xs font-semibold shadow-none border-none cursor-pointer ${
                    activeQuiz.accentColor === 'green'
                      ? 'bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-200 disabled:text-gray-400'
                      : 'bg-amber-500 hover:bg-amber-600 text-white disabled:bg-gray-200 disabled:text-gray-400'
                  }`}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className={`rounded-full px-6 py-2.5 h-auto font-heading text-xs font-semibold shadow-none border-none cursor-pointer flex items-center gap-1 ${
                    activeQuiz.accentColor === 'green'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-amber-500 hover:bg-amber-600 text-white'
                  }`}
                >
                  <span>
                    {currentQuestionIdx + 1 === activeQuiz.questions.length ? 'Finish Quiz' : 'Next Question'}
                  </span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </Button>
              )}
            </div>
          </div>
        )}

        {/* State 3: Summary Finish Screen */}
        {selectedQuizId && activeQuiz && quizFinished && (
          <div className="max-w-md mx-auto p-8 bg-gray-50 border border-gray-100 rounded-[28px] shadow-sm text-center">
            {/* Visual badge indicator */}
            <div className="relative w-24 h-24 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
              <HugeiconsIcon icon={SparklesIcon} size={36} className="text-green-500 animate-pulse" />
              {/* Score text overlay */}
              <div className="absolute inset-0 flex items-center justify-center font-heading font-bold text-lg pt-1 text-green-700">
                {score}/{activeQuiz.questions.length}
              </div>
            </div>

            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Quiz Finished</span>
            
            <h3 className="font-heading text-xl sm:text-2xl text-gray-950 font-bold mb-3">
              {getScoreFeedback((score / activeQuiz.questions.length) * 100).title}
            </h3>

            <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-xs mx-auto">
              {getScoreFeedback((score / activeQuiz.questions.length) * 100).text}
            </p>

            <div className="flex flex-col gap-3">
              <Button
                onClick={handleRestartQuiz}
                className="w-full rounded-full py-3 h-auto font-heading text-xs font-semibold shadow-none border-none cursor-pointer bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-1.5"
              >
                <HugeiconsIcon icon={ReloadIcon} size={14} />
                Try Again
              </Button>

              <button
                onClick={handleExitQuiz}
                className="w-full rounded-full py-3 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900 bg-white font-heading text-xs font-semibold cursor-pointer transition-colors"
              >
                Try the Other Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

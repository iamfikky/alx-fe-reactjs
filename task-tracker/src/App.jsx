import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Snackbar from './components/Snackbar';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white text-center">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Task Tracker</h1>
        </header>

        <main className="space-y-4 mb-4">
          <TaskForm />
          <TaskList />
        </main>

        <Snackbar />
      </div>
    </div>
  );
};

export default App;

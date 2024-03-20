import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Math.random().toString(), task, isDone: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? {...item, isDone: !item.isDone} : item
    );
    setTasks(updatedTasks);
  };

  const handleSelectTask = (id) => {
    const isTaskSelected = selectedTasks.includes(id);
    if (isTaskSelected) {
      setSelectedTasks(selectedTasks.filter((taskId) => taskId !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  const handleDeleteTasks = () => {
    const updatedTasks = tasks.filter((task) => !selectedTasks.includes(task.id));
    setTasks(updatedTasks);
    setSelectedTasks([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.checkContainer} onPress={() => handleToggleTask(item.id)}>
              <View style={styles.check} />
            </TouchableOpacity>
            <Text style={[styles.taskText, item.isDone && styles.doneTaskText]}>
              {item.task}
            </Text>
            <TouchableOpacity style={[styles.deleteContainer, item.isDone && styles.doneTask]} onPress={() => handleSelectTask(item.id)}>
              <View style={styles.delete} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.deleteAllContainer} onPress={handleDeleteTasks}>
        <Text style={styles.deleteAllText}>Delete Selected</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'gray',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  doneTaskText: {
    textDecorationLine: 'line-through',
  },
  deleteContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: 'gray',
  },
  deleteAllContainer: {
    backgroundColor: 'red',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  deleteAllText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
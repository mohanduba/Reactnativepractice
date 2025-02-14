import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const roles = ['Recruiter', 'Hiring Manager', 'Interviewer', 'Admin'];
const accessLevels = ['View Only', 'Edit', 'Full Access'];

const TeamMemberCard = () => {
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [accessModalVisible, setAccessModalVisible] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  const handleAddMember = (values, resetForm) => {
    if (values.email && values.role && values.access) {
      setTeamMembers([...teamMembers, values]);
      resetForm();
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', role: '', access: '' }}
        onSubmit={(values, { resetForm }) => handleAddMember(values, resetForm)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, resetForm }) => (
          <View style={styles.card}>
            <Text style={styles.title}>Invite Team Member</Text>

            <TextInput
              style={styles.input}
              placeholder="Company Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />

            <TouchableOpacity onPress={() => setRoleModalVisible(true)} style={styles.dropdown}>
              <Text style={styles.dropdownText}>{values.role || 'Select Role'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setAccessModalVisible(true)} style={styles.dropdown}>
              <Text style={styles.dropdownText}>{values.access || 'Select Access Level'}</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSubmit} style={[styles.button, styles.addButton]}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>

            <Modal visible={roleModalVisible} transparent animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={roles}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setFieldValue('role', item);
                          setRoleModalVisible(false);
                        }}
                        style={styles.modalItemContainer}
                      >
                        <Text style={styles.modalItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            <Modal visible={accessModalVisible} transparent animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={accessLevels}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setFieldValue('access', item);
                          setAccessModalVisible(false);
                        }}
                        style={styles.modalItemContainer}
                      >
                        <Text style={styles.modalItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>
          </View>
        )}
      </Formik>

      {/* List of Added Team Members */}
      <FlatList
        data={teamMembers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.memberItem}>
            <Text>{item.email} - {item.role} - {item.access}</Text>
            <TouchableOpacity onPress={() => handleRemoveMember(index)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  dropdownText: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
  },
  modalItemContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalItem: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
  memberItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  removeText: {
    color: 'red',
  },
});

export default TeamMemberCard;
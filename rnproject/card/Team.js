import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import TeamMemberCard from './TeamMemberCard';

import { TouchableOpacity } from 'react-native';

const Team = () => {
  const [members, setMembers] = useState([1]); // At least one card initially

  return (
    <TeamMemberCard/>
  );
};

export default Team;

// import React, { useState, useEffect } from 'react';
// import { Formik } from 'formik';
// import Import from '../../Globalimports/Imports';

// const roles = ['Recruiter', 'Hiring Manager', 'Interviewer', 'Admin'];
// const accessLevels = ['View Only', 'Edit', 'Full Access'];

// const TeamMemberCard = () => {
//   const [roleModalVisible, setRoleModalVisible] = useState(false);
//   const [accessModalVisible, setAccessModalVisible] = useState(false);
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [editingMember, setEditingMember] = useState(null);

//   const handleAddMember = (values, resetForm) => {
//     if (values.email && values.role && values.access) {
//       if (editingMember !== null) {
//         const updatedMembers = [...teamMembers];
//         updatedMembers[editingMember.index] = values;
//         setTeamMembers(updatedMembers);
//         setEditingMember(null);
//       } else {
//         setTeamMembers([...teamMembers, values]);
//       }
//       resetForm();
//     }
//   };

//   const handleEditMember = (index) => {
//     setEditingMember({ ...teamMembers[index], index });
//   };

//   const handleRemoveMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };
  

//   return (
//     <Import.View style={styles.container}>
//       <Formik
//         initialValues={{
//           email: editingMember ? editingMember.email : '',
//           role: editingMember ? editingMember.role : '',
//           access: editingMember ? editingMember.access : '',
//         }}
//         onSubmit={(values, { resetForm }) => handleAddMember(values, resetForm)}
//         enableReinitialize 
//       >
//         {({ handleChange, handleBlur, handleSubmit, values }) => (
//           <Import.View style={styles.card}>
//             <Import.Text style={styles.title}>Invite Team Member</Import.Text>

//             <Import.TextInput
//               style={styles.input}
//               placeholder="Company Email"
//               value={values.email}
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//             />

//             <Import.TouchableOpacity onPress={() => setRoleModalVisible(true)} style={styles.dropdown}>
//               <Import.Text style={styles.dropdownText}>{values.role || 'Select Role'}</Import.Text>
//             </Import.TouchableOpacity>

//             <Import.TouchableOpacity onPress={() => setAccessModalVisible(true)} style={styles.dropdown}>
//               <Import.Text style={styles.dropdownText}>{values.access || 'Select Access Level'}</Import.Text>
//             </Import.TouchableOpacity>

//             <Import.View style={styles.buttonContainer}>
//               <Import.TouchableOpacity onPress={handleSubmit} style={[styles.button, styles.addButton]}>
//                 <Import.Text style={styles.buttonText}>{editingMember ? 'Update' : 'Add'}</Import.Text>
//               </Import.TouchableOpacity>
//             </Import.View>

//             <Import.Modal visible={roleModalVisible} transparent animationType="slide">
//               <Import.View style={styles.modalContainer}>
//                 <Import.View style={styles.modalContent}>
//                   <Import.FlatList
//                     data={roles}
//                     keyExtractor={(item) => item}
//                     renderItem={({ item }) => (
//                       <Import.TouchableOpacity
//                         onPress={() => {
                          
//                           setRoleModalVisible(false);
//                         }}
//                         style={styles.modalItemContainer}
//                       >
//                         <Import.Text style={styles.modalItem}>{item}</Import.Text>
//                       </Import.TouchableOpacity>
//                     )}
//                   />
//                 </Import.View>
//               </Import.View>
//             </Import.Modal>

//             <Import.Modal visible={accessModalVisible} transparent animationType="slide">
//               <Import.View style={styles.modalContainer}>
//                 <Import.View style={styles.modalContent}>
//                   <Import.FlatList
//                     data={accessLevels}
//                     keyExtractor={(item) => item}
//                     renderItem={({ item }) => (
//                       <Import.TouchableOpacity
//                         onPress={() => {
                          
//                           setAccessModalVisible(false);
//                         }}
//                         style={styles.modalItemContainer}
//                       >
//                         <Import.Text style={styles.modalItem}>{item}</Import.Text>
//                       </Import.TouchableOpacity>
//                     )}
//                   />
//                 </Import.View>
//               </Import.View>
//             </Import.Modal>
//           </Import.View>
//         )}
//       </Formik>

//       {/* List of Added Team Members */}
//       <Import.FlatList
//         data={teamMembers}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <Import.View style={styles.memberItem}>
//             <Import.View>
//               <Import.Text style={[Import.Theme.h3]}>
//                 Email: <Import.Text style={[Import.Theme.h4]}>{item.email}</Import.Text>
//               </Import.Text>
//               <Import.Text style={[Import.Theme.h3]}>
//                 Role: <Import.Text style={[Import.Theme.h4]}>{item.role}</Import.Text>
//               </Import.Text>
//               <Import.Text style={[Import.Theme.h3]}>
//                 Access: <Import.Text style={[Import.Theme.h4]}>{item.access}</Import.Text>
//               </Import.Text>
//             </Import.View>

//             <Import.TouchableOpacity
//               style={styles.editButton}
//               onPress={() => handleEditMember(index)}
//             >
//               <Import.Text style={styles.buttonText}>Edit</Import.Text>
//             </Import.TouchableOpacity>
//             <Import.TouchableOpacity
//               style={styles.removeButton}
//               onPress={() => handleRemoveMember(index)}
//             >
//               <Import.Text style={styles.buttonText}>Remove</Import.Text>
//             </Import.TouchableOpacity>
//           </Import.View>
//         )}
//       />
//     </Import.View>
//   );
// };

// const styles = Import.StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   dropdown: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     backgroundColor: '#f9f9f9',
//   },
//   dropdownText: {
//     fontSize: 16,
//     color: '#555',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   button: {
//     padding: 10,
//     borderRadius: 5,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 250,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     elevation: 10,
//   },
//   modalItemContainer: {
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   modalItem: {
//     fontSize: 16,
//     padding: 10,
//     textAlign: 'center',
//   },
//   memberItem: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginTop: 10,
//     borderRadius: 10,
//     backgroundColor: '#f78243',
//   },
//   editButton: {
//     backgroundColor: '#983beb',
//     padding: 4,
//     alignItems: 'center',
//     marginTop: 8,
//     borderRadius: 8,
//   },
//   removeButton: {
//     backgroundColor: 'red',
//     padding: 4,
//     alignItems: 'center',
//     marginTop: 4,
//     borderRadius: 8,
//   },
// });

// export default TeamMemberCard;


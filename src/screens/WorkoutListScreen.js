import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import { workouts } from '../data/workouts';
import { colors, spacing, typography } from '../theme/theme';

export default function WorkoutListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={typography.screenTitle}>Workouts</Text>
            <Text style={typography.screenSubtitle}>8 workouts · Get ready to train</Text>
          </View>
        }
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            difficulty={item.difficulty}
            onPress={() => navigation.navigate('WorkoutDetails', { workout: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  header: {
    marginBottom: spacing.lg,
  },
});
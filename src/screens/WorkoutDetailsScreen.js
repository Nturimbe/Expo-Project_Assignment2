import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography } from '../theme/theme';

export default function WorkoutDetailsScreen({ route, navigation }) {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrap}>
          <Image source={workout.image} style={styles.image} />
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={20} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={typography.screenTitle}>{workout.title}</Text>
          <Text style={[typography.screenSubtitle, { marginTop: 4 }]}>
            {workout.category} · {workout.difficulty}
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={18} color={colors.primary} />
              <Text style={typography.cardMeta}>{workout.duration} min</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="flame-outline" size={18} color={colors.primary} />
              <Text style={typography.cardMeta}>{workout.calories} Kcal</Text>
            </View>
          </View>

          <Text style={[typography.sectionTitle, styles.sectionSpacing]}>About</Text>
          <Text style={typography.body}>{workout.description}</Text>

          <Text style={[typography.sectionTitle, styles.sectionSpacing]}>Exercises</Text>
          {workout.exercises.map((exercise, index) => (
            <View key={exercise} style={styles.exerciseRow}>
              <View style={styles.exerciseIndex}>
                <Text style={styles.exerciseIndexText}>{index + 1}</Text>
              </View>
              <Text style={typography.body}>{exercise}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.startButton, isCompleted && styles.completedButton]}
          onPress={() => setIsCompleted((prev) => !prev)}
        >
          <Text style={[styles.startButtonText, isCompleted && styles.completedButtonText]}>
            {isCompleted ? 'Completed' : 'Start Workout'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  imageWrap: { width: '100%', height: 280, position: 'relative' },
  image: { width: '100%', height: '100%' },
  backButton: {
    position: 'absolute',
    top: spacing.lg,
    left: spacing.lg,
    width: 36,
    height: 36,
    borderRadius: radii.pill,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { padding: spacing.lg },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  statItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  sectionSpacing: { marginTop: spacing.lg, marginBottom: spacing.sm },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
  exerciseIndex: {
    width: 26,
    height: 26,
    borderRadius: radii.pill,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseIndexText: { fontSize: 12, fontWeight: '700', color: colors.primary },
  footer: {
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  startButton: {
    backgroundColor: colors.primary,
    borderRadius: radii.button,
    paddingVertical: 16,
    alignItems: 'center',
  },
  completedButton: {
    backgroundColor: colors.primarySoft,
  },
  startButtonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  completedButtonText: { color: colors.primary },
});
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography } from '../theme/theme';

export default function WorkoutCard({ image, title, duration, calories, difficulty, onPress }) {
  // Each card owns its own favorite state, so toggling one never affects another.
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={image} style={styles.image} />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsFavorite((prev) => !prev)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={18}
            color={isFavorite ? colors.primary : colors.textSecondary}
          />
        </TouchableOpacity>
        {difficulty ? (
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{difficulty}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.info}>
        <Text style={typography.cardTitle} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
            <Text style={typography.cardMeta}>{duration} min</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="flame-outline" size={14} color={colors.primary} />
            <Text style={typography.cardMeta}>{calories} Kcal</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    marginBottom: spacing.md,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  imageWrap: {
    width: '100%',
    height: 140,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 32,
    height: 32,
    borderRadius: radii.pill,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  difficultyBadge: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.card,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radii.pill,
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  info: {
    padding: spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    marginTop: spacing.xs,
    gap: spacing.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header Profile */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://github.com/rcahyakirani-cyber.png' }} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>Raisyah Cahya Kirani</Text>
        <Text style={styles.title}>Frontend Developer & Mobile Explorer</Text>
      </View>

      {/* About Me */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tentang Saya</Text>
        <Text style={styles.cardText}>
          Halo! Saya seorang developer yang tertarik dengan pengembangan aplikasi mobile dan web menggunakan Expo, React Native, dan teknologi modern lainnya.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Keahlian & Teknologi</Text>
        <View style={styles.skillContainer}>
          <Text style={styles.badge}>React Native</Text>
          <Text style={styles.badge}>Expo Router</Text>
          <Text style={styles.badge}>TypeScript</Text>
          <Text style={styles.badge}>JavaScript</Text>
          <Text style={styles.badge}>HTML/CSS</Text>
          <Text style={styles.badge}>Git / GitHub</Text>
        </View>
      </View>

      {/* Social / Contact Links */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Kontak & Sosial Media</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => openLink('https://github.com/rcahyakirani-cyber')}
        >
          <Text style={styles.buttonText}>🌐 Kunjungi GitHub Saya</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.emailButton]} 
          onPress={() => openLink('mailto:rcahyakirani@gmail.com')}
        >
          <Text style={styles.buttonText}>✉️ Kirim Email</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark theme background
  },
  content: {
    padding: 20,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#38bdf8',
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#38bdf8',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#94a3b8',
    lineHeight: 22,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    backgroundColor: '#0284c7',
    color: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  emailButton: {
    backgroundColor: '#334155',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
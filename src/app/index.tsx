import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Ubah cara import gambar ke bentuk URI Web
const gambar1 = Image.resolveAssetSource(require('../../assets/images/proyek1.png')).uri;
const gambar2 = Image.resolveAssetSource(require('../../assets/images/proyek2.png')).uri;
const gambar3 = Image.resolveAssetSource(require('../../assets/images/proyek3.png')).uri;

export default function Home() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const projects = [
    {
      id: 1,
      title: 'Desain Aplikasi Instagram',
      description: 'Membuat desain UI/UX aplikasi Instagram menggunakan Figma.',
      image: gambar1,
      link: 'https://github.com/rcahyakirani-cyber',
    },
    {
      id: 2,
      title: 'Rewear',
      description: 'Membuat aplikasi thrifting online menggunakan java kotlin.',
      image: gambar2,
      link: 'https://github.com/rcahyakirani-cyber',
    },
    {
      id: 3,
      title: 'Flappy Bird',
      description: 'Menggunakan javascript untuk membuat flappy bird.',
      image: gambar3,
      link: 'https://github.com/rcahyakirani-cyber',
    },
  ];

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

      {/* Proyek Saya */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>🚀 Proyek Saya</Text>
      </View>

      {projects.map((item) => (
        <View key={item.id} style={styles.projectCard}>
          {/* Karena image berbentuk URI, source panggil pakai { uri: item.image } */}
          <Image source={{ uri: item.image }} style={styles.projectImage} resizeMode="cover" />
          
          <View style={styles.projectBody}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text style={styles.projectDescription}>{item.description}</Text>
            
            <TouchableOpacity 
              style={styles.projectButton} 
              onPress={() => openLink(item.link)}
            >
              <Text style={styles.buttonText}>Lihat Detail Proyek 🔗</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Kontak */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Kontak & Sosial Media</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => openLink('https://github.com/rcahyakirani-cyber')}
        >
          <Text style={styles.buttonText}>🌐 Kunjungi GitHub Saya</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20, maxWidth: 600, alignSelf: 'center', width: '100%' },
  header: { alignItems: 'center', marginVertical: 30 },
  avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, borderColor: '#38bdf8', marginBottom: 15 },
  name: { fontSize: 26, fontWeight: 'bold', color: '#f8fafc', marginBottom: 5 },
  title: { fontSize: 16, color: '#38bdf8' },
  card: { backgroundColor: '#1e293b', borderRadius: 16, padding: 20, marginBottom: 20 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#f8fafc', marginBottom: 10 },
  cardText: { fontSize: 14, color: '#94a3b8', lineHeight: 22 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  badge: { backgroundColor: '#0284c7', color: '#ffffff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, fontSize: 12, fontWeight: '600' },
  sectionHeader: { marginVertical: 10 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#f8fafc' },
  projectCard: { backgroundColor: '#1e293b', borderRadius: 16, overflow: 'hidden', marginBottom: 20 },
  projectImage: { width: '100%', height: 200 },
  projectBody: { padding: 15 },
  projectTitle: { fontSize: 18, fontWeight: 'bold', color: '#f8fafc', marginBottom: 6 },
  projectDescription: { fontSize: 14, color: '#94a3b8', lineHeight: 20, marginBottom: 15 },
  projectButton: { backgroundColor: '#0284c7', padding: 10, borderRadius: 8, alignItems: 'center' },
  button: { backgroundColor: '#3b82f6', padding: 14, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
});
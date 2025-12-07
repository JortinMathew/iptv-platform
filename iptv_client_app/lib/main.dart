import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/auth_screen.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const IPTVApp());
}

class IPTVApp extends StatelessWidget {
  const IPTVApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'StreamX IPTV',
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0F172A), // Slate 950
        primaryColor: const Color(0xFF9333EA), // Purple 600
        textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF9333EA),
          secondary: Color(0xFFD946EF), // Pink 500
          surface: Color(0xFF1E293B), // Slate 800
        ),
        useMaterial3: true,
      ),
      home: const AuthScreen(),
      routes: {
        '/home': (ctx) => const HomeScreen(),
      },
    );
  }
}

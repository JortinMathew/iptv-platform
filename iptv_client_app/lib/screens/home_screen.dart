import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  // Mock Channels
  final List<Map<String, dynamic>> channels = [
    {
      "name": "Big Buck Bunny (HD)",
      "url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "category": "Movies"
    },
    {
      "name": "Elephant Dream",
      "url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "category": "Movies"
    },
    {
      "name": "Sintel",
      "url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      "category": "Animation"
    }
  ];

  int _selectedIndex = 0;
  VideoPlayerController? _videoPlayerController;
  ChewieController? _chewieController;

  @override
  void initState() {
    super.initState();
    _initializePlayer();
  }

  Future<void> _initializePlayer() async {
    _videoPlayerController?.dispose();
    _chewieController?.dispose();

    _videoPlayerController = VideoPlayerController.networkUrl(
      Uri.parse(channels[_selectedIndex]['url']),
    );

    await _videoPlayerController!.initialize();

    _chewieController = ChewieController(
      videoPlayerController: _videoPlayerController!,
      autoPlay: true,
      looping: true,
      aspectRatio: 16 / 9,
      errorBuilder: (context, errorMessage) {
        return Center(
          child: Text(
            errorMessage,
            style: const TextStyle(color: Colors.white),
          ),
        );
      },
    );

    if (mounted) setState(() {});
  }
  
  void _changeChannel(int index) {
      if (_selectedIndex == index) return;
      setState(() {
          _selectedIndex = index;
      });
      _initializePlayer();
  }

  @override
  void dispose() {
    _videoPlayerController?.dispose();
    _chewieController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          // Sidebar / Channel List
          Container(
            width: 300,
            color: const Color(0xFF1E293B), // Slate 800
            child: Column(
              children: [
                 Container(
                   height: 80,
                   alignment: Alignment.centerLeft,
                   padding: const EdgeInsets.symmetric(horizontal: 24),
                   child: const Text(
                     "Channels", 
                     style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)
                   ),
                 ),
                 Expanded(
                   child: ListView.builder(
                     itemCount: channels.length,
                     itemBuilder: (ctx, i) {
                       final isSelected = i == _selectedIndex;
                       return ListTile(
                         autofocus: true,
                         selected: isSelected,
                         selectedTileColor: const Color(0xFF9333EA).withOpacity(0.2),
                         leading: Icon(Icons.tv, color: isSelected ? const Color(0xFFD946EF) : Colors.white54),
                         title: Text(
                           channels[i]['name'],
                           style: TextStyle(
                             color: isSelected ? Colors.white : Colors.white70,
                             fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                           ),
                         ),
                         onTap: () => _changeChannel(i),
                       );
                     },
                   ),
                 ),
              ],
            ),
          ),
          
          // Main Player Area
          Expanded(
            child: Container(
              color: Colors.black,
              child: Center(
                child: _chewieController != null && _chewieController!.videoPlayerController.value.isInitialized
                  ? Chewie(controller: _chewieController!)
                  : const CircularProgressIndicator(color: Color(0xFF9333EA)),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

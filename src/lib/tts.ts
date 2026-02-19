/**
 * Ordered list of known natural-sounding English TTS voices.
 * Checked in order; first match wins.
 */
const PREFERRED_VOICE_NAMES = [
	// macOS / iOS — very natural built-in voices
	'Daniel', // en-GB, male — macOS + iOS
	'Serena', // en-GB, female premium — macOS
	'Karen', // en-AU, female — iOS
	'Moira', // en-IE, female — macOS
	'Samantha', // en-US, female — macOS + iOS
	// Chrome / Android — Google online voices
	'Google UK English Female',
	'Google UK English Male',
	'Google US English',
	// Microsoft Edge / Windows — neural voices
	'Microsoft Sonia', // en-GB
	'Microsoft Ryan', // en-GB
	'Microsoft Libby', // en-GB
	'Microsoft Jenny', // en-US
	'Microsoft Aria', // en-US
];

/**
 * Returns the best available English TTS voice, preferring natural-sounding
 * platform voices over the default robotic system voice.
 */
export function getBestEnglishVoice(): SpeechSynthesisVoice | null {
	if (typeof window === 'undefined') return null;
	const voices = speechSynthesis.getVoices();

	// 1. Preferred voices by name (known natural voices)
	for (const name of PREFERRED_VOICE_NAMES) {
		const v = voices.find((v) => v.name.includes(name));
		if (v) return v;
	}

	// 2. Any en-GB voice with quality markers
	const enGbQuality = voices.find(
		(v) => v.lang.startsWith('en-GB') && /premium|enhanced|natural|neural|online/i.test(v.name),
	);
	if (enGbQuality) return enGbQuality;

	// 3. Any English voice with quality markers
	const anyQuality = voices.find(
		(v) => v.lang.startsWith('en') && /premium|enhanced|natural|neural|online/i.test(v.name),
	);
	if (anyQuality) return anyQuality;

	// 4. First en-GB voice
	const enGb = voices.find((v) => v.lang.startsWith('en-GB'));
	if (enGb) return enGb;

	// 5. Any English voice as last resort
	return voices.find((v) => v.lang.startsWith('en')) || null;
}

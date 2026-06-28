export interface DayPlan {
  day: number;
  phase: number;
  title: string;
  focus: string;
  blocks: {
    time: string;
    label: string;
    detail: string;
    type: 'dsa' | 'theory' | 'system-design' | 'devops' | 'java' | 'revision' | 'mock';
  }[];
  problems: { name: string; platform: string; difficulty: 'Easy' | 'Medium' | 'Hard' }[];
  resources: { label: string; url: string }[];
  goals: string[];
}

export interface Phase {
  id: number;
  title: string;
  subtitle: string;
  dayRange: string;
  color: string;
  accent: string;
  description: string;
  outcomes: string[];
}

export const phases: Phase[] = [
  {
    id: 1,
    title: 'Foundation & DSA Warmup',
    subtitle: 'Sharpen the axe',
    dayRange: 'Day 1 - 10',
    color: 'emerald',
    accent: '#10b981',
    description:
      'Reset fundamentals: complexity analysis, arrays, strings, hashing, two pointers, sliding window, stacks, queues, and linked lists. Build muscle memory for medium problems in 25 minutes.',
    outcomes: [
      'Solve 25+ Easy/Medium problems with clean code',
      'Master Big-O analysis for any snippet',
      'Internalise two-pointer and sliding-window templates',
      'Implement LinkedList / Stack / Queue from scratch',
    ],
  },
  {
    id: 2,
    title: 'Core DSA Patterns',
    subtitle: 'Trees, Graphs, Heaps, Tries',
    dayRange: 'Day 11 - 30',
    color: 'teal',
    accent: '#14b8a6',
    description:
      'Deep dive into the patterns that appear in 60% of FAANG/Flipkart interviews: binary search variants, recursion & backtracking, trees (BT/BST/traversals), heaps, graphs (BFS/DFS/topo/shortest path), and tries.',
    outcomes: [
      'Solve 60+ curated Medium/Hard problems',
      'Implement BFS/DFS/Dijkstra/topological sort blind',
      'Build a Trie and solve word-search variants',
      'Handle tree traversal without recursion',
    ],
  },
  {
    id: 3,
    title: 'Advanced DSA & DP',
    subtitle: 'The hard stuff',
    dayRange: 'Day 31 - 45',
    color: 'amber',
    accent: '#f59e0b',
    description:
      'Conquer dynamic programming (1D, 2D, on trees/graphs/strings), greedy, bit manipulation, and advanced data structures (Segment Trees, Fenwick, Union-Find). These are the differentiators for senior roles.',
    outcomes: [
      'Solve 40+ DP problems across all sub-patterns',
      'Implement Segment Tree & Union-Find from scratch',
      'Recognise DP recurrence in unseen problems',
      'Handle bit manipulation confidently',
    ],
  },
  {
    id: 4,
    title: 'Java + SpringBoot Deep Dive',
    subtitle: 'Own your stack',
    dayRange: 'Day 46 - 55',
    color: 'rose',
    accent: '#f43f5e',
    description:
      'Leverage your 5 YOE. Go deep on JVM internals, GC tuning, concurrency (locks, executors, atomics, virtual threads), Spring Core/IoC/AOP, Spring Boot autoconfiguration, JPA/Hibernate, transactions, and microservices with Spring Cloud.',
    outcomes: [
      'Explain JVM memory model and GC algorithms',
      'Write thread-safe code with correct synchronisation',
      'Trace Spring Boot auto-configuration end-to-end',
      'Design microservices with resilience patterns',
    ],
  },
  {
    id: 5,
    title: 'System Design Mastery',
    subtitle: 'Think like a Staff engineer',
    dayRange: 'Day 56 - 68',
    color: 'violet',
    accent: '#8b5cf6',
    description:
      'HLD + LLD for product-based companies. Cover load balancing, caching, DB scaling, sharding, CAP, message queues, microservices patterns, and LLD with SOLID + design patterns. Practice with Netflix/Hotstar-style systems.',
    outcomes: [
      'Design 10+ real systems end-to-end',
      'Justify every trade-off (CAP, consistency, latency)',
      'Apply 15+ design patterns in LLD rounds',
      'Estimate capacity for any scale',
    ],
  },
  {
    id: 6,
    title: 'DevOps + Kubernetes Deep Dive',
    subtitle: 'Your unfair advantage',
    dayRange: 'Day 69 - 75',
    color: 'cyan',
    accent: '#06b6d4',
    description:
      'Capitalize on your DevOps/K8s experience. Docker internals, K8s controllers/networking/storage, Helm, Operators, RBAC, NetworkPolicies, CI/CD (ArgoCD/GitLab), observability (Prometheus/Grafana/ELK/OpenTelemetry).',
    outcomes: [
      'Explain K8s control plane and CNI in depth',
      'Write production-grade Helm charts',
      'Design GitOps pipelines with ArgoCD',
      'Instrument apps with OpenTelemetry',
    ],
  },
  {
    id: 7,
    title: 'Company-Specific & Mock Interviews',
    subtitle: 'Cross the finish line',
    dayRange: 'Day 76 - 80',
    color: 'orange',
    accent: '#f97316',
    description:
      'Company-specific patterns (Nike, Flipkart, Myntra, SolarWinds, Jio Hotstar, FAANG), behavioural prep (STAR + Amazon LPs), resume polish, salary negotiation for 30+ LPA, and full mock interview loops.',
    outcomes: [
      'Target the right problems per company',
      'Nail behavioural rounds with STAR stories',
      'Negotiate to 30+ LPA with confidence',
      'Complete 4+ full mock loops',
    ],
  },
];

export const days: DayPlan[] = [
  // ===================== PHASE 1: FOUNDATION (Day 1-10) =====================
  {
    day: 1,
    phase: 1,
    title: 'Big-O, Complexity & Arrays Basics',
    focus: 'Reset your complexity analysis muscle',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Two Sum, Best Time to Buy/Sell Stock, Contains Duplicate (LeetCode Easy). Aim for clean code in <15 min each.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Big-O cheat sheet: time/space for all data structures, amortised analysis (ArrayList), recurrence relations.' },
      { time: '60 min', label: 'System Design Concept', type: 'system-design', detail: 'Read "System Design Primer Intro" — client-server model, latency numbers every engineer should know.' },
      { time: '30 min', label: 'Revision + Notes', type: 'revision', detail: 'Write a 1-page summary of Big-O rules. Create Anki cards: 10 complexity facts.' },
    ],
    problems: [
      { name: 'Two Sum', platform: 'LeetCode #1', difficulty: 'Easy' },
      { name: 'Best Time to Buy and Sell Stock', platform: 'LeetCode #121', difficulty: 'Easy' },
      { name: 'Contains Duplicate', platform: 'LeetCode #217', difficulty: 'Easy' },
    ],
    resources: [
      { label: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/' },
      { label: 'Latency Numbers', url: 'https://gist.github.com/jboner/2841832' },
    ],
    goals: ['Solve 3 problems in <45 min', 'Memorise Big-O of all DS', 'Understand amortised analysis'],
  },
  {
    day: 2,
    phase: 1,
    title: 'Arrays — Patterns & Edge Cases',
    focus: 'Master array manipulation patterns',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Move Zeroes, Sort Colors (Dutch National Flag), Remove Duplicates from Sorted Array, Maximum Subarray (Kadane).' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'In-place vs out-of-place algorithms, prefix sums, difference arrays — when to use each.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Read Google SRE — Capacity Planning & Load Balancing (L4 vs L7).' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Re-solve Day 1 problems from memory. Note patterns you missed.' },
    ],
    problems: [
      { name: 'Sort Colors', platform: 'LeetCode #75', difficulty: 'Medium' },
      { name: 'Maximum Subarray', platform: 'LeetCode #53', difficulty: 'Medium' },
      { name: 'Remove Duplicates from Sorted Array', platform: 'LeetCode #26', difficulty: 'Easy' },
      { name: 'Product of Array Except Self', platform: 'LeetCode #238', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'NeetCode Arrays', url: 'https://neetcode.io/roadmap' },
      { label: 'Google SRE Book', url: 'https://sre.google/sre-book/table-of-contents/' },
    ],
    goals: ['Solve Kadane in O(n) without hints', 'Understand Dutch National Flag', 'Note prefix-sum pattern'],
  },
  {
    day: 3,
    phase: 1,
    title: 'Strings & Hashing',
    focus: 'Hash maps are the #1 interview tool',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Valid Anagram, Group Anagrams, Longest Substring Without Repeating Characters, Valid Palindrome.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Hash function design, collision resolution (chaining vs open addressing), load factor, when hashmaps degrade to O(n).' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Caching fundamentals — write-through, write-back, cache eviction (LRU/LFU/TTL).' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement a HashMap class from scratch in Java.' },
    ],
    problems: [
      { name: 'Group Anagrams', platform: 'LeetCode #49', difficulty: 'Medium' },
      { name: 'Longest Substring Without Repeating Characters', platform: 'LeetCode #3', difficulty: 'Medium' },
      { name: 'Valid Palindrome', platform: 'LeetCode #125', difficulty: 'Easy' },
      { name: 'Ransom Note', platform: 'LeetCode #383', difficulty: 'Easy' },
    ],
    resources: [
      { label: 'Hash Tables Visualisation', url: 'https://visualgo.net/en/hashtable' },
      { label: 'Caching Patterns', url: 'https://martinfowler.com/bliki/TwoHardThings.html' },
    ],
    goals: ['Implement HashMap from scratch', 'Master LRU cache concept', 'Solve Group Anagrams in O(nk)'],
  },
  {
    day: 4,
    phase: 1,
    title: 'Two Pointers & Sliding Window',
    focus: 'The most common Medium pattern',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Three Sum, Container With Most Water, Longest Repeating Character Replacement, Minimum Window Substring.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Fixed vs variable sliding window templates. When to shrink from left. Two-pointer meeting-in-the-middle.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'CDN architecture — edge locations, cache key design, cache invalidation strategies.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write down sliding window template — generic, reusable.' },
    ],
    problems: [
      { name: 'Three Sum', platform: 'LeetCode #15', difficulty: 'Medium' },
      { name: 'Container With Most Water', platform: 'LeetCode #11', difficulty: 'Medium' },
      { name: 'Longest Repeating Character Replacement', platform: 'LeetCode #424', difficulty: 'Medium' },
      { name: 'Minimum Window Substring', platform: 'LeetCode #76', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Sliding Window Template', url: 'https://leetcode.com/discuss/general-discussion/657507/' },
      { label: 'CDN Primer', url: 'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/' },
    ],
    goals: ['Master both sliding window variants', 'Solve 3Sum in O(n²)', 'Understand CDN edge caching'],
  },
  {
    day: 5,
    phase: 1,
    title: 'Stack & Queue Patterns',
    focus: 'Foundations for trees, parsers, monotonic',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Valid Parentheses, Min Stack, Daily Temperatures (monotonic stack), Largest Rectangle in Histogram.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Monotonic stacks (increasing/decreasing), next greater element pattern, stack vs deque.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Message queues intro — Kafka vs RabbitMQ vs SQS, at-least-once vs exactly-once.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement a MinStack and a MonotonicStack class.' },
    ],
    problems: [
      { name: 'Valid Parentheses', platform: 'LeetCode #20', difficulty: 'Easy' },
      { name: 'Min Stack', platform: 'LeetCode #155', difficulty: 'Medium' },
      { name: 'Daily Temperatures', platform: 'LeetCode #739', difficulty: 'Medium' },
      { name: 'Largest Rectangle in Histogram', platform: 'LeetCode #84', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Monotonic Stack Guide', url: 'https://leetcode.com/discuss/general-discussion/1083796/' },
      { label: 'Kafka vs RabbitMQ', url: 'https://www.confluent.io/blog/kafka-vs-rabbitmq/' },
    ],
    goals: ['Recognise monotonic stack problems', 'Solve Largest Rectangle in <20 min', 'Know Kafka basics'],
  },
  {
    day: 6,
    phase: 1,
    title: 'Linked List Mastery',
    focus: 'Pointer manipulation & in-place tricks',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Reverse Linked List, Merge Two Sorted Lists, Linked List Cycle, Reorder List, LRU Cache.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Fast/slow pointers (Floyd), dummy head pattern, in-place reversal, deep copy with random pointer.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Databases intro — relational vs NoSQL, ACID vs BASE, when to pick which.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement DoublyLinkedList from scratch. Code LRU Cache with HashMap + DoublyLinkedList.' },
    ],
    problems: [
      { name: 'Reverse Linked List', platform: 'LeetCode #206', difficulty: 'Easy' },
      { name: 'Linked List Cycle', platform: 'LeetCode #141', difficulty: 'Easy' },
      { name: 'Reorder List', platform: 'LeetCode #143', difficulty: 'Medium' },
      { name: 'LRU Cache', platform: 'LeetCode #146', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'NeetCode Linked List', url: 'https://neetcode.io/roadmap' },
      { label: 'LRU Cache Visualisation', url: 'https://www.interviewcake.com/concept/java/lru-cache' },
    ],
    goals: ['Implement LRU Cache from scratch', 'Master Floyd cycle detection', 'Know ACID vs BASE'],
  },
  {
    day: 7,
    phase: 1,
    title: 'Hashing Advanced + Sets',
    focus: 'Counter, frequency, set operations',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Top K Frequent Elements, Longest Consecutive Sequence, Subarray Sum Equals K, Continuous Subarray Sum.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Prefix sum + hashmap pattern (subarray sum), frequency counting, set difference/intersection.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Database indexing — B-Tree vs Hash index, composite indexes, covering indexes.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Re-solve LRU Cache without notes.' },
    ],
    problems: [
      { name: 'Top K Frequent Elements', platform: 'LeetCode #347', difficulty: 'Medium' },
      { name: 'Longest Consecutive Sequence', platform: 'LeetCode #128', difficulty: 'Medium' },
      { name: 'Subarray Sum Equals K', platform: 'LeetCode #560', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Prefix Sum Pattern', url: 'https://leetcode.com/discuss/general-discussion/1125779/' },
      { label: 'Use the Index Luke', url: 'https://use-the-index-luke.com/' },
    ],
    goals: ['Master prefix sum + hashmap', 'Solve Top K in O(n) with bucket sort', 'Understand B-Tree indexes'],
  },
  {
    day: 8,
    phase: 1,
    title: 'Matrix & 2D Arrays',
    focus: 'Pattern recognition in 2D',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Set Matrix Zeroes, Spiral Matrix, Rotate Image, Word Search.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'In-place matrix operations, transpose+reverse for rotation, BFS/DFS on grid.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Database sharding — range-based, hash-based, directory-based, consistent hashing.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write a generic BFS/DFS template for 2D grids.' },
    ],
    problems: [
      { name: 'Set Matrix Zeroes', platform: 'LeetCode #73', difficulty: 'Medium' },
      { name: 'Spiral Matrix', platform: 'LeetCode #54', difficulty: 'Medium' },
      { name: 'Rotate Image', platform: 'LeetCode #48', difficulty: 'Medium' },
      { name: 'Word Search', platform: 'LeetCode #79', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Consistent Hashing', url: 'https://tom-e-white.com/2007/11/consistent-hashing.html' },
      { label: 'Matrix Patterns', url: 'https://leetcode.com/discuss/general-discussion/951522/' },
    ],
    goals: ['Rotate image in-place', 'Solve Word Search with backtracking', 'Understand sharding strategies'],
  },
  {
    day: 9,
    phase: 1,
    title: 'Intervals & Greedy Intro',
    focus: 'Sorting + sweep line patterns',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Merge Intervals, Insert Interval, Non-overlapping Intervals, Meeting Rooms II.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Interval scheduling, sweep line algorithm, priority queue for end times.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Replication — primary/replica, sync vs async, quorum reads/Writes.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement a sweep line counter from scratch.' },
    ],
    problems: [
      { name: 'Merge Intervals', platform: 'LeetCode #56', difficulty: 'Medium' },
      { name: 'Insert Interval', platform: 'LeetCode #57', difficulty: 'Medium' },
      { name: 'Meeting Rooms II', platform: 'LeetCode #253', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Interval Patterns', url: 'https://leetcode.com/discuss/general-discussion/1080250/' },
      { label: 'Database Replication', url: 'https://www.postgresql.org/docs/current/different-replication-solutions.html' },
    ],
    goals: ['Master interval merge & insert', 'Solve Meeting Rooms II with min-heap', 'Understand replication quorum'],
  },
  {
    day: 10,
    phase: 1,
    title: 'Phase 1 Review + Contest Simulation',
    focus: 'Time-boxed problem solving',
    blocks: [
      { time: '90 min', label: 'Mock Contest', type: 'mock', detail: 'Take a LeetCode Weekly Contest — solve 3 problems in 90 min. Treat it as a real interview.' },
      { time: '60 min', label: 'Review', type: 'revision', detail: 'Re-solve any problem you couldn\'t crack. Read editorial + 3 top solutions.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design a URL Shortener (HLD) — read 2 reference solutions, draw your own diagram.' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Compile "mistakes & lessons" doc for Phase 1. Update Anki.' },
    ],
    problems: [
      { name: 'LeetCode Weekly Contest', platform: 'Contest', difficulty: 'Medium' },
      { name: 'Re-attempt any 2 unsolved', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'LeetCode Contests', url: 'https://leetcode.com/contest/' },
      { label: 'URL Shortener Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2pGx5xBQY9' },
    ],
    goals: ['Complete a 90-min contest', 'Design URL shortener on whiteboard', 'Update mistake journal'],
  },

  // ===================== PHASE 2: CORE DSA PATTERNS (Day 11-30) =====================
  {
    day: 11,
    phase: 2,
    title: 'Binary Search — Variants',
    focus: 'The most underrated pattern',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Binary Search, Search in Rotated Sorted Array, Find Minimum in Rotated Sorted Array, Koko Eating Bananas.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Binary search on answer (mono-predicate), lower/upper bound, search in rotated array logic.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Twitter Timeline — fan-out on write vs fan-out on read, hybrid.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write a generic binary search template that handles all variants.' },
    ],
    problems: [
      { name: 'Search in Rotated Sorted Array', platform: 'LeetCode #33', difficulty: 'Medium' },
      { name: 'Find Minimum in Rotated Sorted Array', platform: 'LeetCode #153', difficulty: 'Medium' },
      { name: 'Koko Eating Bananas', platform: 'LeetCode #875', difficulty: 'Medium' },
      { name: 'Median of Two Sorted Arrays', platform: 'LeetCode #4', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Binary Search Patterns', url: 'https://leetcode.com/discuss/general-discussion/786126/' },
      { label: 'Twitter Timeline Design', url: 'https://www.infoq.com/presentations/Twitter-Timeline-Scalability/' },
    ],
    goals: ['Master binary search on answer', 'Solve Median of Two Sorted Arrays', 'Design Twitter timeline'],
  },
  {
    day: 12,
    phase: 2,
    title: 'Binary Search on Answer',
    focus: 'Advanced binary search applications',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Split Array Largest Sum, Capacity To Ship Packages, Aggressive Cows (SPOJ), Kth Smallest Element in Sorted Matrix.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'When to use binary search on answer — feasibility functions, monotonic predicate property.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design WhatsApp / Chat System — message ordering, delivery status, end-to-end encryption overview.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'List all problems solvable by "binary search on answer".' },
    ],
    problems: [
      { name: 'Split Array Largest Sum', platform: 'LeetCode #410', difficulty: 'Hard' },
      { name: 'Kth Smallest Element in Sorted Matrix', platform: 'LeetCode #378', difficulty: 'Medium' },
      { name: 'Find Peak Element', platform: 'LeetCode #162', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'BS on Answer Guide', url: 'https://medium.com/swlh/binary-search-on-answer-pattern-a8b9d88c941f' },
      { label: 'WhatsApp Engineering', url: 'https://www.youtube.com/watch?v=L725uig4Nek' },
    ],
    goals: ['Solve Split Array Largest Sum', 'Design WhatsApp messaging', 'Recognise BS-on-answer pattern'],
  },
  {
    day: 13,
    phase: 2,
    title: 'Recursion & Backtracking — Basics',
    focus: 'Generate, explore, prune',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Subsets, Permutations, Combinations, Combination Sum.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Recursive tree drawing, choose/don\'t choose pattern, backtracking state restoration, pruning.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design YouTube / Video Streaming — chunking, DASH/HLS, CDN strategy.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write a generic backtracking template. Apply to Permutations.' },
    ],
    problems: [
      { name: 'Subsets', platform: 'LeetCode #78', difficulty: 'Medium' },
      { name: 'Permutations', platform: 'LeetCode #46', difficulty: 'Medium' },
      { name: 'Combination Sum', platform: 'LeetCode #39', difficulty: 'Medium' },
      { name: 'Word Search', platform: 'LeetCode #79', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Backtracking Patterns', url: 'https://leetcode.com/discuss/general-discussion/1079516/' },
      { label: 'YouTube Architecture', url: 'https://www.youtube.com/watch?v=jZ2Zt-IVLMQ' },
    ],
    goals: ['Generate subsets iteratively & recursively', 'Master backtracking template', 'Design video streaming'],
  },
  {
    day: 14,
    phase: 2,
    title: 'Backtracking — Advanced',
    focus: 'N-Queens, Sudoku, Palindromes',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'N-Queens, Sudoku Solver, Palindrome Partitioning, Word Search II.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Constraint propagation, bitmask for state, optimisation via pruning.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Netflix / Hotstar — adaptive bitrate, CDN, origin shield, DRM basics.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve N-Queens using bitmask for column/diagonal tracking.' },
    ],
    problems: [
      { name: 'N-Queens', platform: 'LeetCode #51', difficulty: 'Hard' },
      { name: 'Sudoku Solver', platform: 'LeetCode #37', difficulty: 'Hard' },
      { name: 'Palindrome Partitioning', platform: 'LeetCode #131', difficulty: 'Medium' },
      { name: 'Word Search II', platform: 'LeetCode #212', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'N-Queens Visualisation', url: 'https://www.cs.mcgill.ca/~aassaf9/articles/n_queens/' },
      { label: 'Netflix Architecture', url: 'https://netflixtechblog.com/' },
    ],
    goals: ['Solve N-Queens with bitmask', 'Solve Sudoku without hints', 'Design Hotstar-like streaming'],
  },
  {
    day: 15,
    phase: 2,
    title: 'Trees — Traversals & Properties',
    focus: 'Recursive thinking on trees',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maximum Depth of Binary Tree, Invert Binary Tree, Diameter of Binary Tree, Balanced Binary Tree.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Recursive vs iterative traversal (Morris), post-order for subtree-height problems, return value vs global variable.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Rate Limiter — token bucket, leaky bucket, sliding window, distributed rate limiting with Redis.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement all 3 traversals iteratively using stacks.' },
    ],
    problems: [
      { name: 'Invert Binary Tree', platform: 'LeetCode #226', difficulty: 'Easy' },
      { name: 'Diameter of Binary Tree', platform: 'LeetCode #543', difficulty: 'Easy' },
      { name: 'Balanced Binary Tree', platform: 'LeetCode #110', difficulty: 'Easy' },
      { name: 'Binary Tree Level Order Traversal', platform: 'LeetCode #102', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Tree Traversals', url: 'https://leetcode.com/discuss/general-discussion/937120/' },
      { label: 'Rate Limiter Design', url: 'https://medium.com/@saisiddarth/rate-limiting-9b6cbe7846b0' },
    ],
    goals: ['Iterative traversal mastery', 'Solve Diameter without hints', 'Design distributed rate limiter'],
  },
  {
    day: 16,
    phase: 2,
    title: 'BST & Construction',
    focus: 'Ordered trees',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Validate BST, Kth Smallest Element in BST, Lowest Common Ancestor of BST, Construct Binary Tree from Preorder and Inorder.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'BST property, in-order = sorted, successor/predecessor, tree construction from traversals.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Notification System — push, email, SMS, fan-out, deduplication, retry.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement BST insert, delete, search iteratively.' },
    ],
    problems: [
      { name: 'Validate BST', platform: 'LeetCode #98', difficulty: 'Medium' },
      { name: 'Kth Smallest Element in BST', platform: 'LeetCode #230', difficulty: 'Medium' },
      { name: 'Lowest Common Ancestor of BST', platform: 'LeetCode #235', difficulty: 'Medium' },
      { name: 'Construct BT from Preorder + Inorder', platform: 'LeetCode #105', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'BST Visualisation', url: 'https://visualgo.net/en/bst' },
      { label: 'Notification System Design', url: 'https://bytebytego.com/articles/real-time-notification-system' },
    ],
    goals: ['Validate BST with min/max bounds', 'Construct tree from traversals', 'Design notification system'],
  },
  {
    day: 17,
    phase: 2,
    title: 'Advanced Tree Problems',
    focus: 'Path sums, serialization',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Path Sum II, Binary Tree Maximum Path Sum, Serialize and Deserialize Binary Tree, Count Good Nodes in Binary Tree.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Global max with recursive helper, serialization formats (BFS, DFS), edge cases in deserialization.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Google Drive / File Storage — chunked upload, deduplication, versioning, sync.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Re-solve Maximum Path Sum — it\'s a classic.' },
    ],
    problems: [
      { name: 'Binary Tree Maximum Path Sum', platform: 'LeetCode #124', difficulty: 'Hard' },
      { name: 'Serialize and Deserialize Binary Tree', platform: 'LeetCode #297', difficulty: 'Hard' },
      { name: 'Count Good Nodes in Binary Tree', platform: 'LeetCode #1448', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Serialize/Deserialize', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/' },
      { label: 'Google Drive Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2nyJEkEwBp' },
    ],
    goals: ['Solve Maximum Path Sum', 'Serialize/Deserialize blind', 'Design Google Drive'],
  },
  {
    day: 18,
    phase: 2,
    title: 'Trie — Prefix Trees',
    focus: 'Autocomplete & word search',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Implement Trie, Design Add and Search Words, Word Search II, Replace Words.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Trie node structure, time/space complexity, when Trie beats hashmap, compressed Trie (radix tree).' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Typeahead / Autocomplete — Trie + top-K per node, ranking, personalization.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement Trie with startWith + autocomplete.' },
    ],
    problems: [
      { name: 'Implement Trie (Prefix Tree)', platform: 'LeetCode #208', difficulty: 'Medium' },
      { name: 'Design Add and Search Words', platform: 'LeetCode #211', difficulty: 'Medium' },
      { name: 'Word Search II', platform: 'LeetCode #212', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Trie Visualisation', url: 'https://visualgo.net/en/trie' },
      { label: 'Typeahead Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2yDVZnQ8lG' },
    ],
    goals: ['Implement Trie from scratch', 'Solve Word Search II with Trie', 'Design autocomplete'],
  },
  {
    day: 19,
    phase: 2,
    title: 'Heap / Priority Queue',
    focus: 'Top-K problems',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Kth Largest Element in a Stream, Top K Frequent Elements, Find Median from Data Stream, Merge K Sorted Lists.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Binary heap (min/max), heapify, sift up/down, when to use heap vs sort, two-heap trick for median.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Top K Trending Hashtags — sliding window + heap, approximate counting (Count-Min Sketch).' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement a MinHeap from scratch in Java.' },
    ],
    problems: [
      { name: 'Kth Largest Element in Array', platform: 'LeetCode #215', difficulty: 'Medium' },
      { name: 'Find Median from Data Stream', platform: 'LeetCode #295', difficulty: 'Hard' },
      { name: 'Merge K Sorted Lists', platform: 'LeetCode #23', difficulty: 'Hard' },
      { name: 'Task Scheduler', platform: 'LeetCode #621', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Heap Visualisation', url: 'https://visualgo.net/en/heap' },
      { label: 'Count-Min Sketch', url: 'https://florian.github.io/count-min-sketch/' },
    ],
    goals: ['Implement heap from scratch', 'Two-heap trick for median', 'Design trending hashtags'],
  },
  {
    day: 20,
    phase: 2,
    title: 'Graphs — BFS & DFS',
    focus: 'Traversal mastery',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Number of Islands, Clone Graph, Max Area of Island, Walls and Gates.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Adjacency list vs matrix, BFS for shortest path in unweighted, DFS for connectivity, iterative DFS with stack.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Web Crawler — BFS, politeness, deduplication, distributed frontier.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write BFS & DFS templates for both grid and graph.' },
    ],
    problems: [
      { name: 'Number of Islands', platform: 'LeetCode #200', difficulty: 'Medium' },
      { name: 'Clone Graph', platform: 'LeetCode #133', difficulty: 'Medium' },
      { name: 'Max Area of Island', platform: 'LeetCode #695', difficulty: 'Medium' },
      { name: 'Walls and Gates', platform: 'LeetCode #286', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Graph Patterns', url: 'https://leetcode.com/discuss/general-discussion/655708/' },
      { label: 'Web Crawler Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2yEwBn2ZkB' },
    ],
    goals: ['Solve Number of Islands both BFS & DFS', 'Clone Graph with hashmap', 'Design web crawler'],
  },
  {
    day: 21,
    phase: 2,
    title: 'Graphs — Topological Sort',
    focus: 'DAG ordering',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Course Schedule, Course Schedule II, Alien Dictionary, Parallel Courses III.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Kahn\'s algorithm (BFS in-degree), DFS with finish times, cycle detection in directed graphs.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Distributed Job Scheduler — DAG dependencies, worker pools, failure handling.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement Kahn\'s algorithm in Java from scratch.' },
    ],
    problems: [
      { name: 'Course Schedule', platform: 'LeetCode #207', difficulty: 'Medium' },
      { name: 'Course Schedule II', platform: 'LeetCode #210', difficulty: 'Medium' },
      { name: 'Alien Dictionary', platform: 'LeetCode #269', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Topological Sort', url: 'https://www.geeksforgeeks.org/topological-sorting/' },
      { label: 'Airflow Architecture', url: 'https://airflow.apache.org/docs/apache-airflow/stable/concepts.html' },
    ],
    goals: ['Kahn\'s algorithm fluency', 'Solve Alien Dictionary', 'Design job scheduler'],
  },
  {
    day: 22,
    phase: 2,
    title: 'Graphs — Shortest Path',
    focus: 'Dijkstra, Bellman-Ford, Floyd',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Network Delay Time, Cheapest Flights Within K Stops, Shortest Path in Binary Matrix.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Dijkstra (greedy + heap), Bellman-Ford (negative weights), Floyd-Warshall (all-pairs), A* heuristic.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Google Maps — routing, Dijkstra/A* on road network, traffic updates.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement Dijkstra with a min-heap.' },
    ],
    problems: [
      { name: 'Network Delay Time', platform: 'LeetCode #743', difficulty: 'Medium' },
      { name: 'Cheapest Flights Within K Stops', platform: 'LeetCode #787', difficulty: 'Medium' },
      { name: 'Shortest Path in Binary Matrix', platform: 'LeetCode #1091', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Dijkstra Visualisation', url: 'https://visualgo.net/en/sssp' },
      { label: 'Google Maps Routing', url: 'https://www.youtube.com/watch?v=iYPlRqLnuv4' },
    ],
    goals: ['Dijkstra with heap', 'Bellman-Ford understanding', 'Design Google Maps'],
  },
  {
    day: 23,
    phase: 2,
    title: 'Graphs — Union Find (DSU)',
    focus: 'Disjoint Set Union mastery',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Number of Provinces, Redundant Connection, Accounts Merge, Min Cost to Connect All Points.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Union by rank, path compression, Kruskal\'s MST, dynamic connectivity, when DSU beats BFS/DFS.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Friend Recommendation / Social Graph — DSU for connected components, graph DBs (Neo4j).' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement DSU with both rank & path compression.' },
    ],
    problems: [
      { name: 'Number of Provinces', platform: 'LeetCode #547', difficulty: 'Medium' },
      { name: 'Redundant Connection', platform: 'LeetCode #684', difficulty: 'Medium' },
      { name: 'Accounts Merge', platform: 'LeetCode #721', difficulty: 'Medium' },
      { name: 'Min Cost to Connect All Points', platform: 'LeetCode #1584', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Union-Find Guide', url: 'https://leetcode.com/discuss/general-discussion/1072418/' },
      { label: 'Kruskal Algorithm', url: 'https://visualgo.net/en/mst' },
    ],
    goals: ['Implement DSU optimised', 'Solve Accounts Merge', 'Design social graph'],
  },
  {
    day: 24,
    phase: 2,
    title: 'Graphs — Cycle Detection',
    focus: 'Directed & undirected cycles',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Graph Valid Tree, Eventual Safe States, Find Eventual Safe States, Course Schedule IV.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: '3-color DFS (white/grey/black), union-find for undirected cycles, Kahn\'s for directed.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Deadlock Detection in DB — wait-for graph, cycle detection.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement 3-color DFS for directed cycle detection.' },
    ],
    problems: [
      { name: 'Graph Valid Tree', platform: 'LeetCode #261', difficulty: 'Medium' },
      { name: 'Find Eventual Safe States', platform: 'LeetCode #802', difficulty: 'Medium' },
      { name: 'Course Schedule IV', platform: 'LeetCode #1462', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Cycle Detection', url: 'https://www.geeksforgeeks.org/detect-cycle-in-a-graph/' },
      { label: 'Deadlock Detection', url: 'https://www.geeksforgeeks.org/deadlock-detection-algorithm-in-operating-system/' },
    ],
    goals: ['3-color DFS fluency', 'Solve Eventual Safe States', 'Understand DB deadlocks'],
  },
  {
    day: 25,
    phase: 2,
    title: 'Graphs — Grid + BFS Patterns',
    focus: 'Multi-source BFS, 0-1 BFS',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Rotting Oranges, 01 Matrix, Minimum Genetic Mutation, Word Ladder.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Multi-source BFS, BFS layer by layer, 0-1 BFS with deque, bidirectional BFS.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Snake Game / Multiplayer — game loop, state sync, lockstep protocol.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement bidirectional BFS for Word Ladder.' },
    ],
    problems: [
      { name: 'Rotting Oranges', platform: 'LeetCode #994', difficulty: 'Medium' },
      { name: '01 Matrix', platform: 'LeetCode #542', difficulty: 'Medium' },
      { name: 'Word Ladder', platform: 'LeetCode #127', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Multi-source BFS', url: 'https://leetcode.com/problems/as-far-from-land-as-possible/solution/' },
      { label: 'Multiplayer Game Sync', url: 'https://www.gabrielgambetta.com/client-server-game-architecture.html' },
    ],
    goals: ['Multi-source BFS fluency', 'Bidirectional BFS for Word Ladder', 'Game state sync concepts'],
  },
  {
    day: 26,
    phase: 2,
    title: 'Bit Manipulation',
    focus: 'XOR magic',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Single Number, Number of 1 Bits, Counting Bits, Reverse Bits, Missing Number.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'XOR properties (a^a=0, a^0=a), bit masking, Brian Kernighan\'s algorithm, bit manipulation tricks.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Distributed Unique ID Generator — Snowflake, UUID, Twitter Snowflake.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Memorise XOR properties and 5 bit tricks.' },
    ],
    problems: [
      { name: 'Single Number', platform: 'LeetCode #136', difficulty: 'Easy' },
      { name: 'Counting Bits', platform: 'LeetCode #338', difficulty: 'Easy' },
      { name: 'Missing Number', platform: 'LeetCode #268', difficulty: 'Easy' },
      { name: 'Reverse Bits', platform: 'LeetCode #190', difficulty: 'Easy' },
    ],
    resources: [
      { label: 'Bit Tricks', url: 'https://leetcode.com/discuss/general-discussion/1073231/' },
      { label: 'Snowflake ID', url: 'https://github.com/twitter-archive/snowflake' },
    ],
    goals: ['Master XOR properties', 'Brian Kernighan for bit counting', 'Design Snowflake ID'],
  },
  {
    day: 27,
    phase: 2,
    title: 'Greedy Algorithms',
    focus: 'When greedy works',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Jump Game, Jump Game II, Gas Station, Task Scheduler, Partition Labels.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Greedy choice property, optimal substructure, exchange argument proofs, when greedy fails.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Distributed Cache — consistent hashing for partitioning, replication, write policies.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'List 10 problems where greedy is correct vs incorrect.' },
    ],
    problems: [
      { name: 'Jump Game', platform: 'LeetCode #55', difficulty: 'Medium' },
      { name: 'Gas Station', platform: 'LeetCode #134', difficulty: 'Medium' },
      { name: 'Task Scheduler', platform: 'LeetCode #621', difficulty: 'Medium' },
      { name: 'Partition Labels', platform: 'LeetCode #763', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Greedy Patterns', url: 'https://leetcode.com/discuss/general-discussion/1061059/' },
      { label: 'Distributed Cache Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2yEwBv9Z2B' },
    ],
    goals: ['Solve Jump Game II in O(n)', 'Solve Gas Station', 'Design distributed cache'],
  },
  {
    day: 28,
    phase: 2,
    title: 'Intervals + Heap Combined',
    focus: 'Meeting rooms & scheduling',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Employee Free Time, Minimum Number of Meeting Rooms, Find Right Interval, The Skyline Problem.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Sweep line + heap, event-based simulation, skyline algorithm.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Calendar / Booking System — concurrency, double-booking prevention, time zones.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve The Skyline Problem without hints.' },
    ],
    problems: [
      { name: 'Employee Free Time', platform: 'LeetCode #759', difficulty: 'Hard' },
      { name: 'Find Right Interval', platform: 'LeetCode #436', difficulty: 'Medium' },
      { name: 'The Skyline Problem', platform: 'LeetCode #218', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Skyline Solution', url: 'https://leetcode.com/problems/the-skyline-problem/solution/' },
      { label: 'Calendar System Design', url: 'https://www.hellointerview.com/learn/system-design/problem-difficulty/calendly' },
    ],
    goals: ['Solve Skyline problem', 'Master sweep line + heap', 'Design calendar system'],
  },
  {
    day: 29,
    phase: 2,
    title: 'Strings — Advanced Patterns',
    focus: 'KMP, Rabin-Karp',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Longest Happy Prefix (KMP), Repeated String Match (Rabin-Karp), Find All Anagrams in String.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'KMP failure function, Rabin-Karp rolling hash, Z-algorithm, suffix arrays (concept).' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Plagiarism Detector — shingling, MinHash, LSH.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement KMP failure function from scratch.' },
    ],
    problems: [
      { name: 'Longest Happy Prefix', platform: 'LeetCode #1392', difficulty: 'Hard' },
      { name: 'Find All Anagrams in String', platform: 'LeetCode #438', difficulty: 'Medium' },
      { name: 'Repeated String Match', platform: 'LeetCode #686', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'KMP Algorithm', url: 'https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/' },
      { label: 'Plagiarism Detector', url: 'https://ds2diwjcjttls.cloudfront.net/pdf/2020-Maxim-Berman-PlagiarismDetector.pdf' },
    ],
    goals: ['Implement KMP from scratch', 'Rolling hash understanding', 'Design plagiarism detector'],
  },
  {
    day: 30,
    phase: 2,
    title: 'Phase 2 Review + Mock Contest',
    focus: 'Test your trees + graphs muscle',
    blocks: [
      { time: '90 min', label: 'Mock Contest', type: 'mock', detail: 'Take LeetCode Biweekly Contest. Aim for 3 problems in 90 min.' },
      { time: '60 min', label: 'Review', type: 'revision', detail: 'Editorial + 3 top solutions for unsolved. Note new patterns.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Instagram — full HLD on whiteboard. Compare with reference.' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Compile Phase 2 mistake journal. Identify weak patterns.' },
    ],
    problems: [
      { name: 'LeetCode Biweekly Contest', platform: 'Contest', difficulty: 'Medium' },
      { name: 'Re-solve any 2 unsolved', platform: 'LeetCode', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'LeetCode Contests', url: 'https://leetcode.com/contest/' },
      { label: 'Instagram Architecture', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2yEwBv9Z2B' },
    ],
    goals: ['Complete contest with 3 problems', 'Design Instagram on whiteboard', 'Identify weak patterns'],
  },

  // ===================== PHASE 3: ADVANCED DSA & DP (Day 31-45) =====================
  {
    day: 31,
    phase: 3,
    title: 'DP — 1D Foundations',
    focus: 'State + transition thinking',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Climbing Stairs, House Robber, House Robber II, Min Cost Climbing Stairs, Word Break.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Top-down (memo) vs bottom-up (tabulation), state definition, transition function, base cases.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Distributed Counter (likes, views) — count-min sketch, CRDTs, eventual consistency.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve House Robber both memo and tabulation. Convert memo to tabu.' },
    ],
    problems: [
      { name: 'Climbing Stairs', platform: 'LeetCode #70', difficulty: 'Easy' },
      { name: 'House Robber', platform: 'LeetCode #198', difficulty: 'Medium' },
      { name: 'House Robber II', platform: 'LeetCode #213', difficulty: 'Medium' },
      { name: 'Word Break', platform: 'LeetCode #139', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'DP Patterns', url: 'https://leetcode.com/discuss/general-discussion/458695/' },
      { label: 'CRDTs', url: 'https://crdt.tech/' },
    ],
    goals: ['Memo vs tabulation fluency', 'Solve House Robber variants', 'Understand CRDTs'],
  },
  {
    day: 32,
    phase: 3,
    title: 'DP — Knapsack Family',
    focus: '0/1 & unbounded knapsack',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: '0/1 Knapsack, Coin Change, Coin Change II, Partition Equal Subset Sum, Target Sum.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: '0/1 vs unbounded, state compression (1D array), subset sum pattern.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Payment System — idempotency, two-phase commit, saga pattern.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Convert 2D knapsack DP to 1D space-optimised.' },
    ],
    problems: [
      { name: 'Coin Change', platform: 'LeetCode #322', difficulty: 'Medium' },
      { name: 'Coin Change II', platform: 'LeetCode #518', difficulty: 'Medium' },
      { name: 'Partition Equal Subset Sum', platform: 'LeetCode #416', difficulty: 'Medium' },
      { name: 'Target Sum', platform: 'LeetCode #494', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Knapsack Visualisation', url: 'https://www.cs.usfca.edu/~galles/visualization/Knapsack.html' },
      { label: 'Saga Pattern', url: 'https://microservices.io/patterns/data/saga.html' },
    ],
    goals: ['Solve Coin Change variants', 'Space-optimised knapsack', 'Understand saga pattern'],
  },
  {
    day: 33,
    phase: 3,
    title: 'DP — Longest Common Subsequence',
    focus: 'String DP family',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Longest Common Subsequence, Longest Common Substring, Edit Distance, Shortest Common Supersequence.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: '2D DP table, traceback for actual subsequence, space optimisation (2 rows).' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Distributed Lock Service — Redis Redlock, Zookeeper, etcd lease.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve Edit Distance with O(min(m,n)) space.' },
    ],
    problems: [
      { name: 'Longest Common Subsequence', platform: 'LeetCode #1143', difficulty: 'Medium' },
      { name: 'Edit Distance', platform: 'LeetCode #72', difficulty: 'Hard' },
      { name: 'Shortest Common Supersequence', platform: 'LeetCode #1092', difficulty: 'Hard' },
      { name: 'Distinct Subsequences', platform: 'LeetCode #115', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'LCS Visualisation', url: 'https://www.cs.usfca.edu/~galles/visualization/DPLCS.html' },
      { label: 'Distributed Locks', url: 'https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html' },
    ],
    goals: ['Solve Edit Distance blind', '2-row space optimisation', 'Understand distributed locks'],
  },
  {
    day: 34,
    phase: 3,
    title: 'DP — LIS Family',
    focus: 'Longest Increasing Subsequence',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Longest Increasing Subsequence (O(n²) and O(n log n)), Russian Doll Envelopes, Number of LIS.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Patience sorting, binary search for LIS, when O(n²) is acceptable.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Search Autocomplete — Trie + top-K + personalization + A/B testing.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement patience sorting for LIS.' },
    ],
    problems: [
      { name: 'Longest Increasing Subsequence', platform: 'LeetCode #300', difficulty: 'Medium' },
      { name: 'Russian Doll Envelopes', platform: 'LeetCode #354', difficulty: 'Hard' },
      { name: 'Number of Longest Increasing Subsequence', platform: 'LeetCode #673', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Patience Sorting', url: 'https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/' },
      { label: 'Search Autocomplete', url: 'https://www.algolia.com/blog/ai/powering-autocomplete-experiences-design-considerations/' },
    ],
    goals: ['LIS in O(n log n)', 'Solve Russian Doll Envelopes', 'Design autocomplete with personalization'],
  },
  {
    day: 35,
    phase: 3,
    title: 'DP — Grid & Path',
    focus: '2D grid DP',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Unique Paths, Unique Paths II, Minimum Path Sum, Dungeon Game, Cherry Pickup.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Forward vs backward DP on grids, multi-dimensional state, reverse traversal.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design News Feed Algorithm — ranking, personalization, edge rank basics.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve Dungeon Game (tricky — backward DP).' },
    ],
    problems: [
      { name: 'Unique Paths', platform: 'LeetCode #62', difficulty: 'Medium' },
      { name: 'Minimum Path Sum', platform: 'LeetCode #64', difficulty: 'Medium' },
      { name: 'Dungeon Game', platform: 'LeetCode #174', difficulty: 'Hard' },
      { name: 'Cherry Pickup', platform: 'LeetCode #741', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Grid DP Patterns', url: 'https://leetcode.com/discuss/general-discussion/662866/' },
      { label: 'News Feed Ranking', url: 'https://medium.com/@amitupreti/the-architecture-of-a-news-feed-system-f0ab502d4d3f' },
    ],
    goals: ['Solve Dungeon Game', 'Master 2D grid DP', 'Understand feed ranking'],
  },
  {
    day: 36,
    phase: 3,
    title: 'DP — Stocks Family',
    focus: 'Buy/sell with states',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Best Time to Buy and Sell Stock I-IV, with Cooldown, with Transaction Fee.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'State machine DP — holding/cash states, transaction count as state dimension.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Stock Exchange / Order Matching Engine — order book, price-time priority.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve Stock IV with k transactions using state machine.' },
    ],
    problems: [
      { name: 'Best Time to Buy and Sell Stock III', platform: 'LeetCode #123', difficulty: 'Hard' },
      { name: 'Best Time to Buy and Sell Stock IV', platform: 'LeetCode #188', difficulty: 'Hard' },
      { name: 'with Cooldown', platform: 'LeetCode #309', difficulty: 'Medium' },
      { name: 'with Transaction Fee', platform: 'LeetCode #714', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'State Machine DP', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/' },
      { label: 'Order Matching Engine', url: 'https://www.investopedia.com/terms/m/matchingengine.asp' },
    ],
    goals: ['Master state machine DP', 'Solve Stock IV', 'Design matching engine'],
  },
  {
    day: 37,
    phase: 3,
    title: 'DP — Strings Advanced',
    focus: 'Palindromes & partitions',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Longest Palindromic Substring, Palindromic Substrings, Longest Palindromic Subsequence, Minimum Insertion Steps to Make String Palindrome.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Expand-around-center vs DP, gap method for substring DP, reversal-based tricks.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Spotify / Music Streaming — content delivery, recommendation basics.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve Longest Palindromic Subsequence with gap method.' },
    ],
    problems: [
      { name: 'Longest Palindromic Substring', platform: 'LeetCode #5', difficulty: 'Medium' },
      { name: 'Palindromic Substrings', platform: 'LeetCode #647', difficulty: 'Medium' },
      { name: 'Longest Palindromic Subsequence', platform: 'LeetCode #516', difficulty: 'Medium' },
      { name: 'Minimum Insertion Steps', platform: 'LeetCode #1312', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Palindrome DP', url: 'https://leetcode.com/discuss/general-discussion/937121/' },
      { label: 'Spotify Architecture', url: 'https://www.youtube.com/watch?v=SfYaQG7LUrM' },
    ],
    goals: ['Master palindrome DP', 'Gap method understanding', 'Design music streaming'],
  },
  {
    day: 38,
    phase: 3,
    title: 'DP — Trees',
    focus: 'DP on binary trees',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'House Robber III, Maximum Sum BST in Binary Tree, Binary Tree Cameras, Longest ZigZag Path.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Returning multiple values from recursion, subtree DP with state (covered/uncovered), post-order traversal.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design E-commerce Product Catalog — category trees, faceted search, denormalization.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve Binary Tree Cameras (classic tree DP).' },
    ],
    problems: [
      { name: 'House Robber III', platform: 'LeetCode #337', difficulty: 'Medium' },
      { name: 'Binary Tree Cameras', platform: 'LeetCode #968', difficulty: 'Hard' },
      { name: 'Maximum Sum BST in Binary Tree', platform: 'LeetCode #1373', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Tree DP', url: 'https://codeforces.com/blog/entry/20935' },
      { label: 'Catalog System', url: 'https://www.confluent.io/blog/how-kafka-used-by-fashion-retailers/' },
    ],
    goals: ['Solve House Robber III', 'Tree DP with multiple return values', 'Design product catalog'],
  },
  {
    day: 39,
    phase: 3,
    title: 'DP — Interval & MCM',
    focus: 'Matrix chain multiplication',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Burst Balloons, Minimum Cost to Cut a Stick, Guess Number Higher or Lower II, Strange Printer.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Interval DP, gap method, choosing the last/most-expensive operation.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Feature Flag System — gradual rollout, A/B testing integration, kill switches.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve Burst Balloons (classic interval DP).' },
    ],
    problems: [
      { name: 'Burst Balloons', platform: 'LeetCode #312', difficulty: 'Hard' },
      { name: 'Minimum Cost to Cut a Stick', platform: 'LeetCode #1547', difficulty: 'Hard' },
      { name: 'Strange Printer', platform: 'LeetCode #664', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Interval DP', url: 'https://leetcode.com/discuss/general-discussion/605793/' },
      { label: 'Feature Flags', url: 'https://martinfowler.com/articles/feature-toggles.html' },
    ],
    goals: ['Solve Burst Balloons', 'Master interval DP', 'Design feature flag system'],
  },
  {
    day: 40,
    phase: 3,
    title: 'DP — Digit & Bitmask',
    focus: 'Bitmask DP',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Partition to K Equal Sum Subsets, Find the Shortest Superstring, Traveling Salesman Problem (TSP).' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Bitmask as subset representation, TSP DP O(2^n · n), when to use bitmask vs other approaches.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Recommendation System — collaborative filtering, content-based, hybrid.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement TSP with bitmask DP.' },
    ],
    problems: [
      { name: 'Partition to K Equal Sum Subsets', platform: 'LeetCode #698', difficulty: 'Medium' },
      { name: 'Find the Shortest Superstring', platform: 'LeetCode #943', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Bitmask DP', url: 'https://leetcode.com/discuss/general-discussion/1125779/' },
      { label: 'Recommendation Systems', url: 'https://developers.google.com/machine-learning/recommendation' },
    ],
    goals: ['Implement TSP with bitmask', 'Solve K Equal Sum Subsets', 'Design recommendation system'],
  },
  {
    day: 41,
    phase: 3,
    title: 'DP — Graphs & DAGs',
    focus: 'DP on DAGs',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'All Paths From Source to Target, Number of Ways to Arrive at Destination, Parallel Courses III.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'DP on DAG = topological order + relaxation, longest path in DAG, count paths in DAG.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Distributed Tracing — span/trace, OpenTelemetry, sampling, DAG of spans.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Solve Parallel Courses III (topo + DP).' },
    ],
    problems: [
      { name: 'All Paths From Source to Target', platform: 'LeetCode #797', difficulty: 'Medium' },
      { name: 'Number of Ways to Arrive at Destination', platform: 'LeetCode #1976', difficulty: 'Medium' },
      { name: 'Parallel Courses III', platform: 'LeetCode #2050', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'DP on DAG', url: 'https://www.geeksforgeeks.org/dynamic-programming-dag/' },
      { label: 'Distributed Tracing', url: 'https://opentelemetry.io/docs/concepts/' },
    ],
    goals: ['Solve Parallel Courses III', 'DP on DAG fluency', 'Design distributed tracing'],
  },
  {
    day: 42,
    phase: 3,
    title: 'Segment Trees',
    focus: 'Range queries',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Range Sum Query - Mutable, Count of Range Sum, My Calendar III, Range Sum Query 2D.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Segment tree build/query/update, lazy propagation, point vs range updates.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Real-time Leaderboard — Redis sorted set, segment tree for rank queries.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement segment tree with lazy propagation.' },
    ],
    problems: [
      { name: 'Range Sum Query - Mutable', platform: 'LeetCode #307', difficulty: 'Medium' },
      { name: 'Count of Range Sum', platform: 'LeetCode #327', difficulty: 'Hard' },
      { name: 'My Calendar III', platform: 'LeetCode #732', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Segment Tree', url: 'https://visualgo.net/en/segmenttree' },
      { label: 'Lazy Propagation', url: 'https://www.geeksforgeeks.org/lazy-propagation-in-segment-tree/' },
    ],
    goals: ['Implement seg tree with lazy', 'Solve My Calendar III', 'Design leaderboard'],
  },
  {
    day: 43,
    phase: 3,
    title: 'Fenwick Tree (BIT)',
    focus: 'Binary Indexed Tree',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Count of Smaller Numbers After Self, Reverse Pairs, Create Sorted Array through Instructions.' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Fenwick tree vs segment tree, when to use BIT, inversion count with BIT.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Distributed Job Queue — Kafka + worker pools, exactly-once semantics.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement Fenwick tree with point update + prefix query.' },
    ],
    problems: [
      { name: 'Count of Smaller Numbers After Self', platform: 'LeetCode #315', difficulty: 'Hard' },
      { name: 'Reverse Pairs', platform: 'LeetCode #493', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Fenwick Tree', url: 'https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/' },
      { label: 'Distributed Job Queue', url: 'https://blog.bytebytego.com/p/distributed-job-queue' },
    ],
    goals: ['Implement Fenwick tree', 'Solve Count of Smaller', 'Design distributed job queue'],
  },
  {
    day: 44,
    phase: 3,
    title: 'Mixed Hard Problems',
    focus: 'Combining patterns',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Trapping Rain Water, Longest Consecutive Sequence (revisit), Minimum Window Substring (revisit), Median of Two Sorted Arrays (revisit).' },
      { time: '60 min', label: 'Theory', type: 'theory', detail: 'Problem classification — recognise which pattern to apply within 2 minutes of reading.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Pastebin — read-heavy, short URL, expiration, abuse prevention.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Create a "pattern recognition" cheatsheet for 50 problem types.' },
    ],
    problems: [
      { name: 'Trapping Rain Water', platform: 'LeetCode #42', difficulty: 'Hard' },
      { name: 'First Missing Positive', platform: 'LeetCode #41', difficulty: 'Hard' },
      { name: 'Trapping Rain Water II', platform: 'LeetCode #407', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Blind 75', url: 'https://leetcode.com/discuss/general-discussion/460599/' },
      { label: 'Pastebin Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2NAwBVQYwB' },
    ],
    goals: ['Solve Trapping Rain Water', 'Build pattern recognition sheet', 'Design Pastebin'],
  },
  {
    day: 45,
    phase: 3,
    title: 'Phase 3 Review + Hard Mock',
    focus: 'Test DP + advanced patterns',
    blocks: [
      { time: '90 min', label: 'Mock Contest', type: 'mock', detail: 'Take LeetCode Weekly Contest. Aim for 3 problems, including 1 Hard.' },
      { time: '60 min', label: 'Review', type: 'revision', detail: 'Editorial + solutions for unsolved. Note DP sub-patterns still weak.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design Uber / Ola — geospatial indexing (geohash), surge pricing, driver matching.' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Phase 3 mistake journal. Plan remediation for weak patterns.' },
    ],
    problems: [
      { name: 'LeetCode Weekly Contest', platform: 'Contest', difficulty: 'Hard' },
      { name: 'Re-solve 2 hardest unsolved', platform: 'LeetCode', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'LeetCode Contests', url: 'https://leetcode.com/contest/' },
      { label: 'Uber System Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview/m2yEwBv9Z2B' },
    ],
    goals: ['Complete contest with 1 Hard', 'Design Uber', 'Remediation plan ready'],
  },

  // ===================== PHASE 4: JAVA + SPRINGBOOT DEEP DIVE (Day 46-55) =====================
  {
    day: 46,
    phase: 4,
    title: 'JVM Internals & Memory Model',
    focus: 'Think like a JVM engineer',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium problems from your weak list.' },
      { time: '60 min', label: 'Java Theory', type: 'java', detail: 'JVM memory areas (heap, stack, method, metaspace), object lifecycle, class loading, bytecode.' },
      { time: '60 min', label: 'Java Deep Dive', type: 'java', detail: 'GC algorithms (Serial, Parallel, G1, ZGC), GC tuning flags, heap dump analysis with MAT.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Trigger GC, take heap dump, find a memory leak with jmap + MAT.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'JVM Spec', url: 'https://docs.oracle.com/javase/specs/jvms/se17/html/index.html' },
      { label: 'G1 GC Guide', url: 'https://www.oracle.com/technical-resources/articles/java/g1gc.html' },
    ],
    goals: ['Draw JVM memory areas', 'Explain G1 vs ZGC', 'Analyse a heap dump'],
  },
  {
    day: 47,
    phase: 4,
    title: 'Java Concurrency — Foundations',
    focus: 'Thread safety mastery',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Java Theory', type: 'java', detail: 'Thread lifecycle, synchronized, volatile, happens-before, reentrant locks, condition variables.' },
      { time: '60 min', label: 'Java Deep Dive', type: 'java', detail: 'Executors, ThreadPoolExecutor internals, fork/join, CompletableFuture, atomic classes.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Implement a thread-safe Singleton (3 ways), a bounded buffer with ReentrantLock.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Java Concurrency Tutorial', url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/' },
      { label: 'Java Memory Model', url: 'https://www.cs.umd.edu/~pugh/java/memoryModel/' },
    ],
    goals: ['Explain happens-before', 'Implement bounded buffer', 'Master CompletableFuture'],
  },
  {
    day: 48,
    phase: 4,
    title: 'Java Concurrency — Advanced',
    focus: 'Locks, virtual threads, Loom',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Java Theory', type: 'java', detail: 'ReadWriteLock, StampedLock, Semaphore, CountDownLatch, CyclicBarrier, Phaser.' },
      { time: '60 min', label: 'Java Deep Dive', type: 'java', detail: 'Java 21 Virtual Threads (Project Loom), structured concurrency, scoped values.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Refactor a CompletableFuture pipeline to virtual threads.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Virtual Threads JEP', url: 'https://openjdk.org/jeps/444' },
      { label: 'Structured Concurrency', url: 'https://openjdk.org/jeps/453' },
    ],
    goals: ['Implement ReadWriteLock use case', 'Explain virtual threads', 'Use structured concurrency'],
  },
  {
    day: 49,
    phase: 4,
    title: 'Java Collections Deep Dive',
    focus: 'Internals of every collection',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Java Theory', type: 'java', detail: 'HashMap internals (resize, treeify), ConcurrentHashMap (segmented → striped), LinkedHashMap LRU access order.' },
      { time: '60 min', label: 'Java Deep Dive', type: 'java', detail: 'CopyOnWriteArrayList, ArrayBlockingQueue vs LinkedBlockingQueue, PriorityBlockingQueue, Spliterator & Stream parallelism.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Read HashMap source code in JDK 17. Note bucket structure.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'HashMap Source', url: 'https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/HashMap.java' },
      { label: 'ConcurrentHashMap', url: 'https://www.baeldung.com/java-concurrent-map' },
    ],
    goals: ['Explain HashMap resize & treeify', 'ConcurrentHashMap internals', 'Stream parallelism model'],
  },
  {
    day: 50,
    phase: 4,
    title: 'Spring Core & IoC',
    focus: 'Understand the magic',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Spring Theory', type: 'java', detail: 'IoC container, BeanFactory vs ApplicationContext, bean lifecycle, scopes (singleton/prototype/request).' },
      { time: '60 min', label: 'Spring Deep Dive', type: 'java', detail: 'AOP — pointcuts, advice types, proxy mechanisms (JDK dynamic vs CGLIB), transaction management under the hood.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write a custom BeanPostProcessor and a @Around advice.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Spring Framework Docs', url: 'https://docs.spring.io/spring-framework/reference/' },
      { label: 'Spring AOP', url: 'https://docs.spring.io/spring-framework/reference/core/aop.html' },
    ],
    goals: ['Draw bean lifecycle', 'Explain JDK vs CGLIB proxy', 'Write custom AOP'],
  },
  {
    day: 51,
    phase: 4,
    title: 'Spring Boot Internals',
    focus: 'Auto-configuration magic',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Spring Theory', type: 'java', detail: 'SpringApplication run flow, auto-configuration mechanism, @Conditional family, spring.factories / AutoConfiguration.imports.' },
      { time: '60 min', label: 'Spring Deep Dive', type: 'java', detail: 'Actuator endpoints, metrics (Micrometer), health checks, custom starters, configuration properties binding.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write a custom Spring Boot starter. Test auto-configuration.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Spring Boot Reference', url: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/' },
      { label: 'Auto-Configuration', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.auto-configuration' },
    ],
    goals: ['Explain auto-configuration flow', 'Write custom starter', 'Use Actuator + Micrometer'],
  },
  {
    day: 52,
    phase: 4,
    title: 'JPA, Hibernate & Transactions',
    focus: 'Database layer mastery',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Spring Theory', type: 'java', detail: 'JPA entity lifecycle, persistence context, N+1 problem, lazy vs eager fetching, fetch joins.' },
      { time: '60 min', label: 'Spring Deep Dive', type: 'java', detail: 'Transaction propagation (REQUIRED, REQUIRES_NEW, NESTED), isolation levels, @Transactional pitfalls, optimistic vs pessimistic locking.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Reproduce N+1 problem and fix with fetch join or @EntityGraph.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Hibernate Docs', url: 'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html' },
      { label: 'Transaction Propagation', url: 'https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html' },
    ],
    goals: ['Explain entity lifecycle', 'Solve N+1 problem', 'Master transaction propagation'],
  },
  {
    day: 53,
    phase: 4,
    title: 'Spring Microservices',
    focus: 'Spring Cloud patterns',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Spring Theory', type: 'java', detail: 'Service discovery (Eureka/Consul), API Gateway (Spring Cloud Gateway), circuit breaker (Resilience4j).' },
      { time: '60 min', label: 'Spring Deep Dive', type: 'java', detail: 'Config server, distributed tracing (Sleuth → Micrometer Tracing), event-driven with Kafka, sagas.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Draw your previous microservice architecture. Identify patterns used.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Spring Cloud', url: 'https://spring.io/projects/spring-cloud' },
      { label: 'Resilience4j', url: 'https://resilience4j.readme.io/docs' },
    ],
    goals: ['Design microservice topology', 'Apply circuit breaker correctly', 'Understand sagas'],
  },
  {
    day: 54,
    phase: 4,
    title: 'Java + Spring Performance',
    focus: 'Production troubleshooting',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'Java Theory', type: 'java', detail: 'Profiling tools: async-profiler, JFR, JMC, Flight Recorder, identifying CPU/memory bottlenecks.' },
      { time: '60 min', label: 'Java Deep Dive', type: 'java', detail: 'Spring Boot performance: connection pooling (HikariCP), async controllers, caching (Caffeine/Redis), batch processing.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Profile a slow Spring Boot endpoint. Find the bottleneck.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'async-profiler', url: 'https://github.com/async-profiler/async-profiler' },
      { label: 'HikariCP', url: 'https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing' },
    ],
    goals: ['Use async-profiler', 'Tune HikariCP', 'Apply Caffeine cache'],
  },
  {
    day: 55,
    phase: 4,
    title: 'Phase 4 Review + Java Mock',
    focus: 'Senior Java engineer interview',
    blocks: [
      { time: '90 min', label: 'Mock Java Interview', type: 'mock', detail: 'Record yourself answering 15 senior Java/Spring questions. Review recording.' },
      { time: '60 min', label: 'Review', type: 'revision', detail: 'Note weak areas. Re-read corresponding docs.' },
      { time: '60 min', label: 'System Design', type: 'system-design', detail: 'Design an e-commerce checkout service — high throughput, idempotency, payment gateway integration.' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Compile Java/Spring cheat sheet. Identify 5 talking points from your 5 YOE.' },
    ],
    problems: [
      { name: 'Mock interview problems', platform: 'Mock', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Java Senior Interview Qs', url: 'https://www.baeldung.com/java-interview-questions' },
      { label: 'Spring Interview Qs', url: 'https://www.springboottutorial.com/spring-boot-interview-questions' },
    ],
    goals: ['Pass mock Java interview', 'Design checkout service', 'Identify experience talking points'],
  },

  // ===================== PHASE 5: SYSTEM DESIGN MASTERY (Day 56-68) =====================
  {
    day: 56,
    phase: 5,
    title: 'System Design Building Blocks',
    focus: 'The Lego bricks',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'Load balancers (L4/L7), reverse proxy, API gateway, service mesh, CDNs, DNS.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Capacity estimation for a system with 100M users — QPS, storage, bandwidth.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Build a "building blocks" cheat sheet.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
      { label: 'ByteByteGo', url: 'https://bytebytego.com/' },
    ],
    goals: ['Memorise building blocks', 'Estimate capacity for 100M users', 'Compare LB vs gateway vs mesh'],
  },
  {
    day: 57,
    phase: 5,
    title: 'Database Scaling',
    focus: 'Sharding, replication, CAP',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'Vertical vs horizontal scaling, sharding strategies, replication (sync/async), CAP theorem, PACELC.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design a sharded user database for 1B users — shard key selection, hot partitions, resharding.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Compare MySQL vs PostgreSQL vs MongoDB vs Cassandra for 5 use cases.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Designing Data-Intensive Apps', url: 'https://dataintensive.net/' },
      { label: 'Cassandra Architecture', url: 'https://cassandra.apache.org/doc/latest/cassandra/architecture/' },
    ],
    goals: ['Explain CAP & PACELC', 'Design sharding strategy', 'Compare DBs across use cases'],
  },
  {
    day: 58,
    phase: 5,
    title: 'Caching Deep Dive',
    focus: 'Multi-tier caching',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'Cache patterns (cache-aside, read-through, write-through, write-back), eviction (LRU/LFU/Arc), cache stampede, thundering herd.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design a multi-tier cache (browser → CDN → app → Redis → DB) for an e-commerce homepage.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Explain cache invalidation strategies. When to use TTL vs explicit.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Redis Docs', url: 'https://redis.io/docs/' },
      { label: 'Caching at Scale', url: 'https://medium.com/@narengowda/caching-at-scale-7c7d9f4b91b8' },
    ],
    goals: ['Master cache patterns', 'Design multi-tier cache', 'Handle thundering herd'],
  },
  {
    day: 59,
    phase: 5,
    title: 'Message Queues & Event Streaming',
    focus: 'Kafka deep dive',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'Kafka internals (partitions, offsets, consumer groups, ISR), exactly-once semantics, RabbitMQ vs Kafka vs Pulsar.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design an event-driven order processing system with Kafka + saga pattern.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Compare pub-sub vs point-to-point, queue vs topic vs stream.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Kafka Definitive Guide', url: 'https://www.confluent.io/resources/kafka-the-definitive-guide/' },
      { label: 'Exactly-Once Semantics', url: 'https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/' },
    ],
    goals: ['Explain Kafka internals', 'Design event-driven saga', 'Compare messaging systems'],
  },
  {
    day: 60,
    phase: 5,
    title: 'Microservices Patterns',
    focus: 'Production-grade microservices',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'Service discovery, API gateway, BFF, strangler fig, sidecar, service mesh, circuit breaker, bulkhead, retry with backoff.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design a food delivery platform (Swiggy/Zomato) — services split, data ownership, async flows.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Document microservice anti-patterns to avoid.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Microservices.io', url: 'https://microservices.io/' },
      { label: 'Swiggy Engineering', url: 'https://bytes.swiggy.com/' },
    ],
    goals: ['Apply microservice patterns', 'Design food delivery', 'Avoid anti-patterns'],
  },
  {
    day: 61,
    phase: 5,
    title: 'API Design & Versioning',
    focus: 'REST, gRPC, GraphQL',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'REST principles, idempotency keys, pagination (cursor/offset), gRPC for internal, GraphQL for flexible clients, API versioning strategies.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design a public API for a payments platform — idempotency, webhooks, rate limiting, versioning.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Compare REST vs gRPC vs GraphQL across 5 dimensions.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Stripe API Design', url: 'https://stripe.com/blog/api-idempotency' },
      { label: 'GraphQL vs REST', url: 'https://www.apollographql.com/blog/graphql/basics/rest-vs-graphql/' },
    ],
    goals: ['Design idempotent APIs', 'Compare API styles', 'Design payments API'],
  },
  {
    day: 62,
    phase: 5,
    title: 'LLD — SOLID & Design Patterns',
    focus: 'Object design mastery',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'LLD Theory', type: 'system-design', detail: 'SOLID principles, GRASP, the 23 GoF patterns — focus on Strategy, Factory, Observer, Decorator, Adapter, Command, State.' },
      { time: '60 min', label: 'LLD Practice', type: 'system-design', detail: 'LLD a parking lot — classes, relationships, design patterns applied. Code in Java.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Memorise UML class diagram notations.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Refactoring.Guru', url: 'https://refactoring.guru/design-patterns' },
      { label: 'Parking Lot LLD', url: 'https://www.geeksforgeeks.org/design-parking-lot-using-object-oriented-principles/' },
    ],
    goals: ['Apply SOLID fluently', 'Design parking lot', 'Use 7 patterns confidently'],
  },
  {
    day: 63,
    phase: 5,
    title: 'LLD — Real Systems',
    focus: 'Game & system design',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'LLD Theory', type: 'system-design', detail: 'Concurrency in LLD — locks, atomic operations, thread-safe collections, immutability.' },
      { time: '60 min', label: 'LLD Practice', type: 'system-design', detail: 'LLD a chess game — pieces, board, moves, check/checkmate detection, undo/redo.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Review your LLD. Apply Strategy, Factory, Command patterns.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Chess LLD', url: 'https://www.geeksforgeeks.org/design-a-chess-game/' },
      { label: 'Concurrency in Java', url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/' },
    ],
    goals: ['LLD a chess game', 'Apply concurrency patterns', 'Use design patterns in LLD'],
  },
  {
    day: 64,
    phase: 5,
    title: 'LLD — Library & Framework Design',
    focus: 'API + extensibility',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'LLD Theory', type: 'system-design', detail: 'Designing for extensibility — plugin systems, hooks, dependency injection, inversion of control.' },
      { time: '60 min', label: 'LLD Practice', type: 'system-design', detail: 'LLD a Vending Machine or Elevator System with multiple strategies and state transitions.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Use State pattern for elevator. Use Strategy for vending machine dispensing.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Vending Machine LLD', url: 'https://www.geeksforgeeks.org/design-vending-machine-java/' },
      { label: 'Elevator LLD', url: 'https://www.geeksforgeeks.org/design-elevator-system/' },
    ],
    goals: ['LLD vending machine + elevator', 'Apply State pattern', 'Design for extensibility'],
  },
  {
    day: 65,
    phase: 5,
    title: 'Distributed Systems Concepts',
    focus: 'Consensus, consistency, clocks',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'Paxos, Raft, 2PC, 3PC, vector clocks, logical clocks, eventual consistency, CRDTs, gossip protocol.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design a distributed counter / like system for Instagram — consistency trade-offs.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Compare Paxos vs Raft. When to use which.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Raft Paper', url: 'https://raft.github.io/' },
      { label: 'Designing Data-Intensive Apps', url: 'https://dataintensive.net/' },
    ],
    goals: ['Explain Raft consensus', 'Design distributed counter', 'Compare consistency models'],
  },
  {
    day: 66,
    phase: 5,
    title: 'Big System Design — Netflix/Hotstar',
    focus: 'High-scale streaming',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'CDN strategy, adaptive bitrate, origin shield, DRM, live streaming vs VOD.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design Jio Hotstar for IPL final — 20M concurrent viewers, autoscaling, fault tolerance.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Document your assumptions, capacity numbers, and trade-offs.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Hotstar IPL Scaling', url: 'https://blog.hotstar.com/scaling-hotstar-streaming-for-10-3-million-concurrent-users-2f9a2bd9d6b3' },
      { label: 'Netflix Architecture', url: 'https://netflixtechblog.com/full-cycle-developers-an-introduction-806b5a266e7d' },
    ],
    goals: ['Design Hotstar for IPL', 'Handle 20M concurrent viewers', 'Justify CDN strategy'],
  },
  {
    day: 67,
    phase: 5,
    title: 'Big System Design — E-commerce',
    focus: 'Flipkart/Myntra scale',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'System Design Theory', type: 'system-design', detail: 'Inventory management, flash sales, cart service, search (Elasticsearch), recommendations.' },
      { time: '60 min', label: 'System Design Practice', type: 'system-design', detail: 'Design Flipkart Big Billion Days — flash sale with 1M concurrent checkouts.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Document inventory reservation strategy + payment handling.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Flipkart Engineering', url: 'https://engineering.flipkart.com/' },
      { label: 'Flash Sale Design', url: 'https://www.algodale.com/system-design/flash-sale/' },
    ],
    goals: ['Design Flipkart BBD', 'Handle 1M concurrent checkouts', 'Inventory + payment design'],
  },
  {
    day: 68,
    phase: 5,
    title: 'Phase 5 Review + Full Mock SD',
    focus: 'End-to-end design interview',
    blocks: [
      { time: '90 min', label: 'Mock System Design', type: 'mock', detail: 'Mock interview: "Design Nike.com" with a friend or record yourself. 45 min design + 15 min Q&A.' },
      { time: '60 min', label: 'Review', type: 'revision', detail: 'Watch recording. Note missing components, weak justifications.' },
      { time: '60 min', label: 'LLD Mock', type: 'mock', detail: 'Mock LLD interview: "Design a logging framework" or "Design a task scheduler."' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Compile system design cheat sheet — components, patterns, numbers.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'System Design Interview', url: 'https://www.systemdesigninterview.com/' },
      { label: 'ByteByteGo Vol 1', url: 'https://bytebytego.com/' },
    ],
    goals: ['Pass 45-min SD mock', 'Pass 30-min LLD mock', 'Finalise SD cheat sheet'],
  },

  // ===================== PHASE 6: DEVOPS + K8s DEEP DIVE (Day 69-75) =====================
  {
    day: 69,
    phase: 6,
    title: 'Docker Internals',
    focus: 'Beyond docker run',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'DevOps Theory', type: 'devops', detail: 'Namespaces (pid, net, mnt, uts, ipc, user), cgroups, overlayfs, containerd vs runc, OCI spec.' },
      { time: '60 min', label: 'DevOps Deep Dive', type: 'devops', detail: 'Multi-stage builds, BuildKit, build cache optimisation, distroless images, image scanning (Trivy).' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write an optimised Dockerfile for a Spring Boot app (final image <100MB).' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Docker Internals', url: 'https://medium.com/@nagarwaldocker/internals-of-docker-a-deep-dive-into-containerization-9a2e4d3a3b3a' },
      { label: 'Distroless Images', url: 'https://github.com/GoogleContainerTools/distroless' },
    ],
    goals: ['Explain namespaces & cgroups', 'Build distroless image', 'Optimise Dockerfile'],
  },
  {
    day: 70,
    phase: 6,
    title: 'K8s Architecture & Control Plane',
    focus: 'How K8s really works',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'K8s Theory', type: 'devops', detail: 'API server, etcd, scheduler, controller manager, kubelet, kube-proxy, CRI, CNI, CSI.' },
      { time: '60 min', label: 'K8s Deep Dive', type: 'devops', detail: 'Pod lifecycle, QoS classes, init containers, sidecar pattern,downwardAPI, projected volumes.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Draw K8s control plane. Trace a pod creation request end-to-end.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'K8s Architecture', url: 'https://kubernetes.io/docs/concepts/architecture/' },
      { label: 'K8s The Hard Way', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way' },
    ],
    goals: ['Explain control plane components', 'Trace pod creation', 'Master pod lifecycle'],
  },
  {
    day: 71,
    phase: 6,
    title: 'K8s Workloads & Networking',
    focus: 'Deployments, services, ingress',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'K8s Theory', type: 'devops', detail: 'Deployment strategies (rolling, blue-green, canary), StatefulSet vs Deployment vs DaemonSet, Service types (ClusterIP, NodePort, LoadBalancer).' },
      { time: '60 min', label: 'K8s Deep Dive', type: 'devops', detail: 'Ingress controllers, IngressRoute, network policies, CNI plugins (Calico, Cilium), service mesh (Istio/Linkerd).' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Deploy a Spring Boot app with canary release strategy.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'K8s Deployments', url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/' },
      { label: 'Cilium', url: 'https://docs.cilium.io/' },
    ],
    goals: ['Implement canary deploy', 'Configure network policies', 'Compare CNI plugins'],
  },
  {
    day: 72,
    phase: 6,
    title: 'K8s Storage, Config & Secrets',
    focus: 'Stateful workloads',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'K8s Theory', type: 'devops', detail: 'PV/PVC/StorageClass, dynamic provisioning, StatefulSet + volumeClaimTemplates, ConfigMaps, Secrets, external secrets operator.' },
      { time: '60 min', label: 'K8s Deep Dive', type: 'devops', detail: 'Helm charts (template functions, hooks, subcharts), Kustomize, GitOps with ArgoCD.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write a Helm chart for a 3-replica stateful app with PVCs.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'K8s Storage', url: 'https://kubernetes.io/docs/concepts/storage/' },
      { label: 'ArgoCD', url: 'https://argo-cd.readthedocs.io/' },
    ],
    goals: ['Deploy stateful workload', 'Write Helm chart', 'Set up ArgoCD GitOps'],
  },
  {
    day: 73,
    phase: 6,
    title: 'K8s Security & RBAC',
    focus: 'Production security',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'K8s Theory', type: 'devops', detail: 'RBAC (Role, ClusterRole, Binding), ServiceAccounts, Pod Security Standards, NetworkPolicies, OPA Gatekeeper.' },
      { time: '60 min', label: 'K8s Deep Dive', type: 'devops', detail: 'Image scanning, admission controllers (mutating, validating), Kyverno policies, secrets management (Vault, Sealed Secrets).' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Write RBAC for least-privilege CI/CD service account.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'K8s RBAC', url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/' },
      { label: 'Kyverno', url: 'https://kyverno.io/' },
    ],
    goals: ['Design least-privilege RBAC', 'Apply Pod Security Standards', 'Use Kyverno policies'],
  },
  {
    day: 74,
    phase: 6,
    title: 'CI/CD Pipelines',
    focus: 'GitOps mastery',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'DevOps Theory', type: 'devops', detail: 'Pipeline patterns (build → test → scan → deploy), GitOps (pull vs push), ArgoCD, Argo Rollouts, Jenkins X.' },
      { time: '60 min', label: 'DevOps Deep Dive', type: 'devops', detail: 'Trunk-based development, feature flags in CI/CD, canary analysis (Kayenta), progressive delivery.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Design a CI/CD pipeline for microservices with ArgoCD + Argo Rollouts.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'ArgoCD Docs', url: 'https://argo-cd.readthedocs.io/' },
      { label: 'Progressive Delivery', url: 'https://argoproj.github.io/rollouts/' },
    ],
    goals: ['Design GitOps pipeline', 'Implement canary with Argo Rollouts', 'Use feature flags in CI/CD'],
  },
  {
    day: 75,
    phase: 6,
    title: 'Observability & SRE',
    focus: 'Three pillars + SRE practices',
    blocks: [
      { time: '90 min', label: 'DSA Practice', type: 'dsa', detail: 'Maintain DSA — solve 2 Medium from weak list.' },
      { time: '60 min', label: 'DevOps Theory', type: 'devops', detail: 'Metrics (Prometheus), Logs (Loki/ELK), Traces (Tempo/Jaeger), OpenTelemetry, RED/USE method, SLO/SLI/SLA.' },
      { time: '60 min', label: 'DevOps Deep Dive', type: 'devops', detail: 'Alerting philosophy (symptom-based, runbooks), incident response, blameless postmortems, error budgets.' },
      { time: '30 min', label: 'Revision', type: 'revision', detail: 'Instrument a Spring Boot app with Micrometer + OTel. Visualise in Grafana.' },
    ],
    problems: [
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Weak topic revisited', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'OpenTelemetry', url: 'https://opentelemetry.io/docs/' },
      { label: 'Google SRE Book', url: 'https://sre.google/sre-book/table-of-contents/' },
    ],
    goals: ['Instrument app with OTel', 'Define SLOs for a service', 'Write a runbook'],
  },

  // ===================== PHASE 7: COMPANY-SPECIFIC & MOCK INTERVIEWS (Day 76-80) =====================
  {
    day: 76,
    phase: 7,
    title: 'Company-Specific Interview Patterns',
    focus: 'Know your targets',
    blocks: [
      { time: '90 min', label: 'Research', type: 'mock', detail: 'Study interview patterns for Nike, Flipkart, Myntra, SolarWinds, Jio Hotstar, FAANG. Use Glassdoor, LeetCode discussions, InterviewBit.' },
      { time: '60 min', label: 'Pattern Mapping', type: 'revision', detail: 'For each company, list: typical DSA topics, system design expectations, Java depth, rounds structure, bar level.' },
      { time: '60 min', label: 'Targeted Practice', type: 'dsa', detail: 'Solve 3 problems tagged for your top 2 target companies on LeetCode.' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Create a per-company prep checklist with focus areas.' },
    ],
    problems: [
      { name: 'Flipkart-tagged', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Amazon-tagged', platform: 'LeetCode', difficulty: 'Medium' },
      { name: 'Hotstar-tagged', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Glassdoor', url: 'https://www.glassdoor.com/Interview/' },
      { label: 'LeetCode Company Tags', url: 'https://leetcode.com/company/' },
    ],
    goals: ['Map patterns per company', 'Solve 3 company-tagged problems', 'Create prep checklist'],
  },
  {
    day: 77,
    phase: 7,
    title: 'Behavioural + Leadership Rounds',
    focus: 'STAR + Amazon LPs',
    blocks: [
      { time: '90 min', label: 'Behavioural Prep', type: 'mock', detail: 'Draft 8-10 STAR stories covering: conflict, leadership, failure, ambiguity, customer obsession, ownership, bias for action.' },
      { time: '60 min', label: 'Amazon LPs', type: 'revision', detail: 'Memorise 16 Amazon Leadership Principles. Map each story to 2-3 LPs.' },
      { time: '60 min', label: 'Mock Behavioural', type: 'mock', detail: 'Record yourself answering: "Tell me about a time you took a calculated risk" and 4 others.' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Polish stories. Quantify impact. Add metrics (latency reduced by X%, cost saved by $Y).' },
    ],
    problems: [
      { name: 'No DSA today', platform: '-', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Amazon LPs', url: 'https://www.amazon.jobs/principles' },
      { label: 'STAR Method', url: 'https://www.themuse.com/advice/star-interview-method' },
    ],
    goals: ['Draft 10 STAR stories', 'Map stories to LPs', 'Pass mock behavioural'],
  },
  {
    day: 78,
    phase: 7,
    title: 'Full Mock Loop — DSA + System Design',
    focus: 'Real interview simulation',
    blocks: [
      { time: '90 min', label: 'Mock DSA Round', type: 'mock', detail: '45-min DSA interview with a friend/peer or pramp.com. Hard problem.' },
      { time: '60 min', label: 'Mock System Design Round', type: 'mock', detail: '45-min SD interview. "Design a real-time leaderboard for a gaming platform."' },
      { time: '60 min', label: 'Review', type: 'revision', detail: 'Watch recordings. Note communication gaps, missed edge cases, unclear trade-offs.' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Identify top 3 improvement areas. Plan tomorrow\'s remediation.' },
    ],
    problems: [
      { name: 'Mock round 1', platform: 'Pramp', difficulty: 'Hard' },
      { name: 'Mock round 2', platform: 'Pramp', difficulty: 'Hard' },
    ],
    resources: [
      { label: 'Pramp', url: 'https://www.pramp.com/' },
      { label: 'Interviewing.io', url: 'https://interviewing.io/' },
    ],
    goals: ['Pass DSA mock', 'Pass SD mock', 'Identify top 3 gaps'],
  },
  {
    day: 79,
    phase: 7,
    title: 'Full Mock Loop — Java + DevOps',
    focus: 'Leverage your experience',
    blocks: [
      { time: '90 min', label: 'Mock Java Round', type: 'mock', detail: '45-min Java/Spring deep dive. "Walk me through what happens when a request hits @RestController."' },
      { time: '60 min', label: 'Mock DevOps Round', type: 'mock', detail: '45-min K8s/DevOps round. "Design our K8s cluster for 50 microservices with autoscaling."' },
      { time: '60 min', label: 'Mock LLD Round', type: 'mock', detail: '45-min LLD. "Design a rate limiter library" or "Design a distributed cache client."' },
      { time: '30 min', label: 'Notes', type: 'revision', detail: 'Finalise talking points from your 5 YOE — projects, scale, impact.' },
    ],
    problems: [
      { name: 'Mock round 3', platform: 'Mock', difficulty: 'Medium' },
      { name: 'Mock round 4', platform: 'Mock', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Java Senior Mock', url: 'https://www.youtube.com/results?search_query=java+senior+interview+mock' },
      { label: 'K8s Interview Qs', url: 'https://github.com/bregman-arie/devops-exercises' },
    ],
    goals: ['Pass Java mock', 'Pass DevOps mock', 'Pass LLD mock'],
  },
  {
    day: 80,
    phase: 7,
    title: 'Resume, Negotiation & Launch',
    focus: 'Land the 30 LPA offer',
    blocks: [
      { time: '90 min', label: 'Resume Polish', type: 'revision', detail: 'Update resume with metrics (X% latency reduction, $Y cost saved, Z RPS handled). Tailor per company.' },
      { time: '60 min', label: 'Salary Negotiation', type: 'revision', detail: 'Research levels.fyi, Glassdoor salaries for target companies. Prepare counter-offer scripts. Know your walk-away number.' },
      { time: '60 min', label: 'Job Application Strategy', type: 'revision', detail: 'Referrals > LinkedIn > Portal. Identify 20 target openings. Customise cover letter template. Schedule applications.' },
      { time: '30 min', label: 'Final Notes', type: 'revision', detail: 'Compile a 1-page interview day cheat sheet — top 5 strengths, 3 projects, salary expectations.' },
    ],
    problems: [
      { name: 'Final review problem', platform: 'LeetCode', difficulty: 'Medium' },
    ],
    resources: [
      { label: 'Levels.fyi', url: 'https://www.levels.fyi/' },
      { label: 'Negotiation Guide', url: 'https://www.techinterviewhandbook.org/salary-negotiation/' },
      { label: 'Tech Interview Handbook', url: 'https://www.techinterviewhandbook.org/' },
    ],
    goals: ['Polish resume with metrics', 'Prepare negotiation script', '20 target openings identified'],
  },
];

export const companyPatterns = [
  {
    name: 'Flipkart',
    role: 'SDE-2 / SDE-3',
    salary: '25-45 LPA',
    rounds: '1 OA + 3-4 Tech (DSA + HLD + LLD + Past Work)',
    focus: ['Strong DSA (Hard problems)', 'HLD for e-commerce scale', 'Java/Spring deep dive', 'Past project grilling'],
    notes: 'Expect problems on trees, DP, graphs. HLD will be e-commerce themed (cart, inventory, search). They grill deep on past work — be ready with architecture diagrams and metrics.',
    accent: '#2874f0',
  },
  {
    name: 'Myntra',
    role: 'SDE-2 / SDE-3',
    salary: '22-40 LPA',
    rounds: '1 OA + 3 Tech (DSA + System Design + LLD)',
    focus: ['Medium-Hard DSA', 'Fashion-catalog system design', 'Spring Boot + microservices', 'LLD with patterns'],
    notes: 'Myntra focuses on catalog, search, and recommendation systems. LLD questions often involve inventory, cart, or coupon systems. Be ready to discuss scale for flash sales (EORS).',
    accent: '#e91e63',
  },
  {
    name: 'Nike (Engineering India)',
    role: 'Senior Engineer',
    salary: '30-55 LPA',
    rounds: '1 OA + 4 Tech (DSA + HLD + LLD + Behavioural)',
    focus: ['DSA Medium', 'Distributed systems design', 'Event-driven architecture', 'Consumer-facing scale'],
    notes: 'Nike consumer apps need high availability. Expect HLD for inventory sync, recommendation, omnichannel commerce. Strong on event-driven architecture (Kafka) and CQRS.',
    accent: '#111111',
  },
  {
    name: 'SolarWinds',
    role: 'Senior Software Engineer',
    salary: '25-45 LPA',
    rounds: '3-4 Tech (DSA + System Design + DevOps + Past Work)',
    focus: ['Systems programming mindset', 'Monitoring/observability domain', 'K8s + DevOps depth', 'Java/C# proficiency'],
    notes: 'Monitoring products require deep OS + networking knowledge. Expect questions on metrics collection, time-series storage, alerting. K8s and DevOps are heavily tested — your unfair advantage.',
    accent: '#f7941d',
  },
  {
    name: 'Jio Hotstar',
    role: 'SDE-2 / SDE-3',
    salary: '25-50 LPA',
    rounds: '1 OA + 3-4 Tech (DSA + HLD + Past Work + Behavioural)',
    focus: ['DSA Medium-Hard', 'Hyper-scale HLD (20M+ concurrent)', 'CDN + streaming architecture', 'Ad-tech + personalization'],
    notes: 'Hotstar scales for IPL — design for 20M+ concurrent viewers. Expect HLD on live streaming, ad-insertion, real-time analytics. Strong focus on graceful degradation and cost optimisation.',
    accent: '#0f1419',
  },
  {
    name: 'FAANG (Amazon/Google/Meta/Netflix/Apple)',
    role: 'SDE-2 / L5',
    salary: '35-80 LPA (India)',
    rounds: '1-2 OA + 4-5 Onsite (DSA + DSA + System Design + Behavioural + Past Work)',
    focus: ['Hard DSA (LC Hard level)', 'Massive-scale system design', 'Amazon LPs / Googleyness', 'Bar-raiser round'],
    notes: 'Amazon: 16 LPs, bar-raiser. Google: harder DSA, less HLD weight. Meta: speed matters, 2 DSA rounds. Netflix: senior-only, culture fit. Apple: domain-heavy, team-specific.',
    accent: '#16a34a',
  },
];

export const dsaPatterns = [
  { name: 'Two Pointers', count: 12, phase: 1 },
  { name: 'Sliding Window', count: 10, phase: 1 },
  { name: 'Stack / Queue', count: 8, phase: 1 },
  { name: 'Linked List', count: 8, phase: 1 },
  { name: 'Hashing / Maps', count: 15, phase: 1 },
  { name: 'Binary Search', count: 10, phase: 2 },
  { name: 'Trees (BT/BST)', count: 15, phase: 2 },
  { name: 'Graphs (BFS/DFS)', count: 18, phase: 2 },
  { name: 'Topological Sort', count: 6, phase: 2 },
  { name: 'Trie', count: 5, phase: 2 },
  { name: 'Heap / Priority Queue', count: 10, phase: 2 },
  { name: 'Union-Find', count: 6, phase: 2 },
  { name: 'Backtracking', count: 12, phase: 2 },
  { name: 'Dynamic Programming', count: 35, phase: 3 },
  { name: 'Segment Tree / BIT', count: 6, phase: 3 },
  { name: 'Greedy', count: 8, phase: 3 },
  { name: 'Bit Manipulation', count: 6, phase: 3 },
  { name: 'Intervals', count: 6, phase: 1 },
];

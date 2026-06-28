export interface DayExtras {
  practicePrograms: string[];
  interviewQuestions: string[];
}

/**
 * For each of the 80 days:
 *  - practicePrograms: actual coding tasks the learner should write & run that day
 *  - interviewQuestions: theoretical / conceptual questions an interviewer commonly asks on that day's topic
 */
export const dayExtras: Record<number, DayExtras> = {
  // ===================== PHASE 1 =====================
  1: {
    practicePrograms: [
      'Write a function analyzeComplexity(snippet) that returns the Big-O of common patterns (loop, nested loop, recursion, log).',
      'Implement Two Sum three ways: brute O(n²), hash map O(n), sorted two-pointer O(n log n). Benchmark each for n = 1,000,000.',
      'Build an ArrayUtility class with rotateLeft(k), reverse(i,j), and prefixSum() — all in-place where possible.',
      'Write a script that times a function f(n) for n = 10, 100, 1000, 10000 and matches the curve to its Big-O.',
    ],
    interviewQuestions: [
      'What is amortised analysis? Explain with ArrayList insertion as an example.',
      'Differentiate O(1), O(log n), O(n), O(n log n), O(n²) with one example each.',
      'How do you analyse the time complexity of a recursive function?',
      'Why is ArrayList.add() O(1) amortised but LinkedList.add() is O(1) worst-case?',
      'What is the space complexity of a recursive factorial function? Why?',
      'Explain the difference between best-case, average-case, and worst-case complexity with a sorting example.',
    ],
  },
  2: {
    practicePrograms: [
      'Implement Sort Colors (Dutch National Flag) without using built-in sort. Test with 1000 random arrays.',
      'Write Kadane\'s algorithm to return both the max sum AND the subarray indices.',
      'Implement Product of Array Except Self without division and in O(1) extra space (output array excluded).',
      'Build a DifferenceArray class supporting rangeUpdate(l, r, val) and finalArray() in O(1) and O(n) respectively.',
    ],
    interviewQuestions: [
      'Walk me through the Dutch National Flag algorithm. Why is it single-pass?',
      'How does Kadane\'s algorithm handle all-negative arrays?',
      'In Product of Array Except Self, why is division disallowed? What edge case breaks the division approach?',
      'Explain prefix sums. Give 2 problems where they reduce O(n²) to O(n).',
      'When is in-place mutation preferred over returning a new array?',
      'What is the difference between stable and unstable sort? Does it matter for primitives?',
    ],
  },
  3: {
    practicePrograms: [
      'Implement a HashMap class from scratch with separate chaining. Support put, get, remove, and resize.',
      'Build a CustomHashSet using only arrays (no Java HashSet). Handle collisions with linear probing.',
      'Write Group Anagrams using a canonical-key approach (sorted string) — measure time vs counting-key approach.',
      'Implement a frequency counter that streams a 10M-word file and returns top-10 words in O(n log k).',
    ],
    interviewQuestions: [
      'How does a HashMap handle collisions? Compare chaining vs open addressing.',
      'What is the load factor of a HashMap? What happens when it\'s exceeded?',
      'Why does Java 8 convert a HashMap bucket to a red-black tree at threshold 8?',
      'Explain how a hash function should be designed for strings.',
      'What is the time complexity of HashMap get() in the average and worst case?',
      'Why are immutable keys preferred in HashMaps?',
    ],
  },
  4: {
    practicePrograms: [
      'Implement a generic slidingWindow template (fixed + variable) that you can reuse for any problem.',
      'Write Three Sum using both sort + two-pointer and hash-set approaches. Compare time & space.',
      'Build a function longestUniqueSubstring(s) returning both length and the substring itself.',
      'Implement Minimum Window Substring using a frequency map + sliding window. Test edge cases (empty, no match).',
    ],
    interviewQuestions: [
      'When do you use a fixed vs variable sliding window? Give an example of each.',
      'In sliding window, when do you shrink from the left? What triggers it?',
      'Why does Three Sum with hash-set fail to avoid duplicates cleanly?',
      'Explain the two-pointer "meeting in the middle" technique. When does it apply?',
      'What is the invariant maintained in Longest Repeating Character Replacement?',
      'How would you adapt sliding window for a 2D matrix?',
    ],
  },
  5: {
    practicePrograms: [
      'Implement a MinStack that supports push, pop, top, getMin in O(1). Use two stacks.',
      'Build a MonotonicStack utility with nextGreater(arr) and nextSmaller(arr) methods.',
      'Implement Largest Rectangle in Histogram using a monotonic increasing stack.',
      'Write a function that checks for balanced parentheses with multiple bracket types: (), [], {}, <>.',
    ],
    interviewQuestions: [
      'What is a monotonic stack? When is it preferred over a regular stack?',
      'Explain how the next greater element is found in O(n) using a stack.',
      'In MinStack, why do we store min alongside each element (or use two stacks)?',
      'Walk through the Largest Rectangle in Histogram algorithm with [2,1,5,6,2,3].',
      'When would you use a deque instead of a stack?',
      'How does a stack help detect cycles in a directed graph?',
    ],
  },
  6: {
    practicePrograms: [
      'Implement a DoublyLinkedList class from scratch with insert, delete, search, reverse.',
      'Build an LRU Cache using HashMap + DoublyLinkedList. Support get/put in O(1).',
      'Write a function to detect a cycle in a linked list using Floyd\'s algorithm. Also return the cycle start.',
      'Implement deepCopyRandomList(head) for a linked list with random pointers using O(1) extra space.',
    ],
    interviewQuestions: [
      'Explain Floyd\'s cycle detection algorithm. Why does the slow pointer meet the fast one?',
      'How does an LRU Cache achieve O(1) get and put? Walk through the data structure.',
      'Why use a doubly linked list in LRU instead of singly?',
      'In Reorder List, why do you reverse the second half before merging?',
      'What is the time complexity of finding the middle of a linked list? How?',
      'How would you detect the start node of a cycle (not just its presence)?',
    ],
  },
  7: {
    practicePrograms: [
      'Implement Top K Frequent Elements using a bucket-sort approach in O(n).',
      'Build a function subarraySumEqualsK(arr, k) using prefix sums + hash map.',
      'Write Longest Consecutive Sequence in O(n) without sorting.',
      'Implement a ContinuousSubarraySum checker for multiples of k using modular arithmetic.',
    ],
    interviewQuestions: [
      'How does prefix sum + hashmap reduce subarray-sum problems to O(n)?',
      'Why is bucket sort used for Top K Frequent? What\'s the complexity?',
      'In Subarray Sum Equals K, what does the hashmap store as keys and values?',
      'Explain the trick behind Longest Consecutive Sequence being O(n) despite seeming O(n log n).',
      'When would you use a TreeSet vs a HashSet?',
      'How do you handle the empty subarray case in prefix sum problems?',
    ],
  },
  8: {
    practicePrograms: [
      'Implement Rotate Image in-place using transpose + reverse.',
      'Build a function setZeroes(matrix) that marks rows/cols in O(1) extra space.',
      'Write a spiralOrder(matrix) that returns elements in spiral order. Handle non-square matrices.',
      'Implement Word Search using backtracking with pruning.',
    ],
    interviewQuestions: [
      'Why does transpose + reverse rotate a matrix? Walk through the math.',
      'In Set Matrix Zeroes, how do you use the first row/column as markers? What edge case requires a flag?',
      'What is the time complexity of Word Search? How do you prune the backtracking tree?',
      'Explain consistent hashing. Why is it used in distributed caches?',
      'How does sharding differ from partitioning?',
      'What happens when you need to reshard a live database?',
    ],
  },
  9: {
    practicePrograms: [
      'Implement merge(intervals) and insert(intervals, newInterval) in-place where possible.',
      'Build a MeetingRoomsII solver using both min-heap and sweep line approaches.',
      'Write a function findRightInterval(intervals) using binary search on sorted starts.',
      'Implement a sweep line algorithm that counts the maximum number of overlapping intervals at any point.',
    ],
    interviewQuestions: [
      'Why must intervals be sorted by start time before merging?',
      'In Meeting Rooms II, why does a min-heap of end times work?',
      'Explain the sweep line algorithm. When is it preferred?',
      'What is the difference between sync and async database replication?',
      'How do quorum reads/writes work in distributed systems?',
      'When would you choose eventual consistency over strong consistency?',
    ],
  },
  10: {
    practicePrograms: [
      'Take a LeetCode Weekly Contest and solve 3 problems in 90 minutes.',
      'Re-implement any 2 problems you couldn\'t solve during the contest, reading only the editorial first.',
      'Design a URL Shortener on paper — draw the architecture, estimate capacity for 100M URLs/day.',
      'Maintain an "interview journal" entry: list every mistake you made during the contest.',
    ],
    interviewQuestions: [
      'Walk me through your URL Shortener design. What\'s the QPS estimate?',
      'Why did you choose base62 encoding? What\'s the collision probability?',
      'How would you handle hot URLs in your URL Shortener?',
      'What did you learn from the contest today? What pattern did you miss?',
      'How do you stay calm when you can\'t solve a problem in an interview?',
      'What\'s your strategy when you get stuck on a problem — do you ask for hints?',
    ],
  },

  // ===================== PHASE 2 =====================
  11: {
    practicePrograms: [
      'Implement binarySearch(arr, target) returning the index, plus lowerBound and upperBound variants.',
      'Write searchInRotatedSortedArray(arr, target) in O(log n) without looking at any reference.',
      'Build a "binary search on answer" template: find the smallest X such that feasible(X) is true.',
      'Implement Median of Two Sorted Arrays in O(log(min(m, n))).',
    ],
    interviewQuestions: [
      'Why is binary search O(log n)? What invariant is maintained?',
      'How do you handle duplicates in Search in Rotated Sorted Array?',
      'Explain binary search on answer. What property must the predicate have?',
      'Walk through Median of Two Sorted Arrays. Why do we partition on the smaller array?',
      'What happens if you compute mid as (low + high) / 2 in Java? Why?',
      'When is binary search not applicable even on sorted data?',
    ],
  },
  12: {
    practicePrograms: [
      'Implement splitArrayLargestSum(arr, k) using binary search on the answer.',
      'Build a capacityToShip(weights, days) solver with a clear feasibility function.',
      'Write a generic binary search template that returns the smallest feasible value.',
      'Implement Kth Smallest Element in Sorted Matrix using both binary search and min-heap.',
    ],
    interviewQuestions: [
      'How do you decide the search range [low, high] for binary search on answer?',
      'Explain the monotonic predicate property. Why is it required?',
      'In Split Array Largest Sum, what is the feasibility function?',
      'How would you design WhatsApp to handle message ordering across devices?',
      'What is end-to-end encryption? How does Signal protocol work at a high level?',
      'How do you handle delivery status (sent/delivered/read) at scale?',
    ],
  },
  13: {
    practicePrograms: [
      'Implement generateSubsets(arr) using both iterative and recursive backtracking.',
      'Build a permutations(arr) generator with and without duplicates.',
      'Write combinationSum(candidates, target) with backtracking + pruning.',
      'Implement a word search solver that returns all matching paths.',
    ],
    interviewQuestions: [
      'Explain the "choose / don\'t choose" pattern in backtracking.',
      'Why do you need to undo the choice after recursion in backtracking?',
      'How do you handle duplicates in Permutations II?',
      'What pruning can you apply to Combination Sum to reduce the tree size?',
      'How would you design YouTube\'s video chunking for adaptive bitrate?',
      'Explain HLS vs DASH. When would you choose one over the other?',
    ],
  },
  14: {
    practicePrograms: [
      'Implement N-Queens solver using a bitmask for column/diagonal tracking.',
      'Build a Sudoku Solver using backtracking + constraint propagation.',
      'Write palindromePartitioning(s) returning all partitions.',
      'Implement Word Search II using a Trie + backtracking.',
    ],
    interviewQuestions: [
      'How does the bitmask optimization speed up N-Queens?',
      'In Sudoku Solver, what is constraint propagation? How does it prune the search?',
      'Why use a Trie in Word Search II instead of a hashmap?',
      'How would you design Hotstar\'s adaptive streaming for IPL with 20M concurrent viewers?',
      'What is origin shield in a CDN? Why is it useful?',
      'Explain DRM basics. How does Widevine differ from FairPlay?',
    ],
  },
  15: {
    practicePrograms: [
      'Implement all three iterative tree traversals (in/pre/post) using a stack.',
      'Build a levelOrder(root) using a queue, returning levels as separate lists.',
      'Write diameterOfBinaryTree(root) using a recursive helper that returns height.',
      'Implement Morris Traversal (in-order with O(1) space).',
    ],
    interviewQuestions: [
      'Compare recursive vs iterative tree traversal. When is each preferred?',
      'In Diameter of Binary Tree, why do you need a global max and a recursive return?',
      'Explain Morris Traversal. How does it achieve O(1) space?',
      'How would you design a distributed rate limiter? Compare token bucket vs sliding window.',
      'Why use Redis for distributed rate limiting? What\'s the failure mode if Redis is down?',
      'Explain the leaky bucket algorithm. Where is it used in real systems?',
    ],
  },
  16: {
    practicePrograms: [
      'Implement validateBST(root) using min/max bounds (not just comparing with children).',
      'Build kthSmallest(root, k) using iterative in-order traversal.',
      'Write lowestCommonAncestor(root, p, q) for both BST and BT.',
      'Implement buildTree(preorder, inorder) and buildTree(inorder, postorder).',
    ],
    interviewQuestions: [
      'Why is comparing node.value with node.left.value not enough to validate a BST?',
      'In a BST, why is in-order traversal sorted? How does this enable kthSmallest?',
      'Walk through LCA in a BST vs a regular BT. What\'s different?',
      'How do you reconstruct a tree from preorder + inorder? Why are both needed?',
      'How would you design a notification system that supports push, email, and SMS?',
      'How do you deduplicate notifications when the same event triggers multiple channels?',
    ],
  },
  17: {
    practicePrograms: [
      'Implement maxPathSum(root) with a global max + recursive helper.',
      'Build serialize(root) and deserialize(data) for a binary tree (BFS and DFS versions).',
      'Write countGoodNodes(root) where a node is "good" if no ancestor has a larger value.',
      'Implement pathSumIII(root, target) counting all paths that sum to target (any direction down).',
    ],
    interviewQuestions: [
      'In Max Path Sum, what does the recursive helper return vs the global max?',
      'How do you serialize a tree with null markers? Why is this necessary?',
      'Explain the "prefix sum on tree path" trick used in Path Sum III.',
      'How would you design Google Drive\'s file sync? What about conflict resolution?',
      'How does chunked upload work for large files?',
      'Explain content-based deduplication vs filename-based.',
    ],
  },
  18: {
    practicePrograms: [
      'Implement a Trie class with insert, search, startsWith, and autocomplete(prefix, k).',
      'Build WordDictionary supporting addWord and search with wildcard ".".',
      'Write a function that uses a Trie to solve Word Search II efficiently.',
      'Implement a compressed Trie (radix tree) and compare space usage with a regular Trie.',
    ],
    interviewQuestions: [
      'What is the time complexity of Trie insert and search? Compare with hashmap.',
      'When does a Trie outperform a hashmap? When does it lose?',
      'How do you handle wildcard searches in a Trie?',
      'Design an autocomplete system. How do you return top-K suggestions?',
      'How would you personalize autocomplete suggestions per user?',
      'How do you keep the autocomplete index fresh as new queries come in?',
    ],
  },
  19: {
    practicePrograms: [
      'Implement a MinHeap class from scratch with insert, extractMin, heapify in O(n).',
      'Build findMedian(data stream) using the two-heap trick (max-heap + min-heap).',
      'Write mergeKSortedLists(lists) using a min-heap of size k.',
      'Implement taskScheduler(tasks, n) using a greedy + heap approach.',
    ],
    interviewQuestions: [
      'Explain the binary heap property. How is it stored in an array?',
      'Why is heapify O(n) and not O(n log n)?',
      'In Find Median from Data Stream, why do you need two heaps?',
      'How does a priority queue differ from a heap?',
      'Design a system to compute top-K trending hashtags in real time.',
      'What is Count-Min Sketch? When is it preferred over a hashmap?',
    ],
  },
  20: {
    practicePrograms: [
      'Implement numIslands(grid) using both BFS and DFS. Compare iterative vs recursive.',
      'Build cloneGraph(node) using a hashmap for visited nodes.',
      'Write maxAreaOfIsland(grid) returning the largest connected component size.',
      'Implement wallsAndGates(grid) using multi-source BFS from each gate.',
    ],
    interviewQuestions: [
      'When is BFS preferred over DFS? When is DFS preferred?',
      'How do you avoid revisiting cells in a grid BFS/DFS?',
      'Explain multi-source BFS. When is it useful?',
      'How would you design a distributed web crawler? How do you deduplicate URLs at scale?',
      'How do you enforce politeness (rate limiting) per domain in a crawler?',
      'What is a "frontier" in a web crawler? How is it implemented?',
    ],
  },
  21: {
    practicePrograms: [
      'Implement Kahn\'s algorithm (BFS with in-degrees) for topological sort.',
      'Build courseSchedule(numCourses, prerequisites) detecting cycles.',
      'Write alienDictionary(words) inferring character order from sorted words.',
      'Implement parallelCoursesIII(relations, time) using topo sort + DP.',
    ],
    interviewQuestions: [
      'Compare Kahn\'s algorithm with DFS-based topological sort.',
      'How do you detect a cycle in a directed graph? Both BFS and DFS approaches?',
      'In Alien Dictionary, what edge case causes invalid input?',
      'Design a distributed job scheduler with DAG dependencies. How do you handle failures?',
      'How does Airflow\'s scheduler work? What is the backfill mechanism?',
      'How do you prevent a single failed task from blocking the entire DAG?',
    ],
  },
  22: {
    practicePrograms: [
      'Implement Dijkstra\'s algorithm using a min-heap. Return both distances and paths.',
      'Build networkDelayTime(times, n, k) returning the time for all nodes to receive a signal.',
      'Write cheapestFlightsWithinKStops using Bellman-Ford with k+1 iterations.',
      'Implement shortestPathBinaryMatrix(grid) using BFS.',
    ],
    interviewQuestions: [
      'Why does Dijkstra fail with negative edge weights?',
      'Compare Dijkstra, Bellman-Ford, and Floyd-Warshall. When do you use each?',
      'What is the time complexity of Dijkstra with a binary heap vs Fibonacci heap?',
      'How would you design Google Maps\' routing? What algorithm?',
      'How do you incorporate real-time traffic into routing?',
      'What is A* search? How does the heuristic help?',
    ],
  },
  23: {
    practicePrograms: [
      'Implement a DSU class with union by rank + path compression.',
      'Build numberOfProvinces(isConnected) using DSU.',
      'Write accountsMerge(accounts) using DSU + email-to-id mapping.',
      'Implement minCostToConnectAllPoints(points) using Kruskal + DSU.',
    ],
    interviewQuestions: [
      'Why does path compression make DSU nearly O(1) per operation?',
      'Compare union by rank vs union by size.',
      'When does DSU beat BFS/DFS for connected components?',
      'Explain Kruskal\'s MST algorithm. Why sort edges first?',
      'How would you design a friend recommendation system using a social graph?',
      'What is the difference between a graph DB (Neo4j) and a relational DB for graph queries?',
    ],
  },
  24: {
    practicePrograms: [
      'Implement graphValidTree(n, edges) checking for cycles + connectivity.',
      'Build findEventualSafeStates(graph) using 3-color DFS.',
      'Write courseScheduleIV(queries) using topo + reachability bitsets.',
      'Implement cycle detection in both directed and undirected graphs.',
    ],
    interviewQuestions: [
      'What are the 3 colors in DFS for cycle detection? What does each mean?',
      'How does DSU detect cycles in undirected graphs?',
      'In directed graphs, why is 3-color DFS needed instead of just visited?',
      'How do databases detect deadlocks? What is a wait-for graph?',
      'What is the difference between pessimistic and optimistic concurrency control?',
      'How do you recover from a deadlock in a database?',
    ],
  },
  25: {
    practicePrograms: [
      'Implement rottingOranges(grid) using multi-source BFS from all rotten oranges.',
      'Build updateMatrix(mat) returning distance to nearest 0 using multi-source BFS.',
      'Write wordLadder(beginWord, endWord, wordList) using bidirectional BFS.',
      'Implement 0-1 BFS using a deque for shortest path with 0/1 weights.',
    ],
    interviewQuestions: [
      'Why is multi-source BFS faster than running BFS from each source?',
      'How does bidirectional BFS speed up Word Ladder?',
      'Explain 0-1 BFS. Why use a deque instead of a priority queue?',
      'How would you design a multiplayer game\'s state sync? Lockstep vs client-server?',
      'What is lag compensation in games? How is it implemented?',
      'How do you handle cheats in a multiplayer game?',
    ],
  },
  26: {
    practicePrograms: [
      'Implement singleNumber(arr) using XOR.',
      'Build countBits(n) returning bit counts from 0 to n in O(n) using DP.',
      'Write a function missingNumber(arr) using both XOR and sum formula.',
      'Implement reverseBits(n) and Brian Kernighan\'s algorithm for popcount.',
    ],
    interviewQuestions: [
      'Why does a ^ a = 0? How does this enable Single Number?',
      'Explain Brian Kernighan\'s algorithm for counting set bits.',
      'How do you check if a number is a power of 2 using bits?',
      'How would you generate a unique ID at scale? Explain Snowflake.',
      'What are the trade-offs between UUID, Snowflake, and auto-increment?',
      'How do you handle clock skew in distributed ID generation?',
    ],
  },
  27: {
    practicePrograms: [
      'Implement jumpGame(arr) greedy in O(n) — return whether you can reach the end.',
      'Build jumpGameII(arr) returning the minimum number of jumps.',
      'Write gasStation(gas, cost) returning the starting index in O(n).',
      'Implement taskScheduler(tasks, n) returning the minimum intervals.',
    ],
    interviewQuestions: [
      'What is the greedy choice property? How do you prove greedy works?',
      'In Jump Game II, why does greedy give the optimal answer?',
      'Explain the gas station proof. Why is the answer unique?',
      'How would you design a distributed cache with consistent hashing?',
      'What happens when a node joins or leaves a consistent hash ring?',
      'How do you replicate data in a distributed cache for fault tolerance?',
    ],
  },
  28: {
    practicePrograms: [
      'Implement employeeFreeTime(intervals) using a min-heap of end times.',
      'Build findRightInterval(intervals) using binary search on sorted starts.',
      'Write theSkylineProblem(buildings) using a sweep line + max-heap.',
      'Implement a function that detects the maximum number of concurrent meetings.',
    ],
    interviewQuestions: [
      'How does the sweep line algorithm work for the skyline problem?',
      'Why is a max-heap needed for skyline? What does it track?',
      'In Employee Free Time, why merge all intervals first?',
      'How would you design a calendar booking system (Calendly)?',
      'How do you prevent double-booking in a concurrent system?',
      'How do you handle time zones in a global calendar?',
    ],
  },
  29: {
    practicePrograms: [
      'Implement KMP pattern matching with the failure function (LPS array).',
      'Build a Rabin-Karp rolling hash matcher. Handle hash collisions.',
      'Write findAllAnagrams(s, p) using a sliding window frequency counter.',
      'Implement the Z-algorithm for pattern matching.',
    ],
    interviewQuestions: [
      'Explain the KMP failure function. What does LPS[i] represent?',
      'How does rolling hash work in Rabin-Karp? What\'s the modulus for?',
      'Compare KMP, Rabin-Karp, and Z-algorithm. When do you use each?',
      'How would you design a plagiarism detector?',
      'What is MinHash? How does it estimate Jaccard similarity?',
      'What is Locality-Sensitive Hashing (LSH)? How does it scale?',
    ],
  },
  30: {
    practicePrograms: [
      'Take a LeetCode Biweekly Contest and solve 3 problems in 90 minutes.',
      'Design Instagram on a whiteboard — full HLD with capacity estimates.',
      'Re-solve 2 hard problems you couldn\'t crack during the contest.',
      'Maintain an "interview journal" entry for the contest.',
    ],
    interviewQuestions: [
      'Walk me through your Instagram design. What\'s the QPS estimate for the feed?',
      'Why did you choose fan-out on write vs fan-out on read?',
      'How would you handle celebrity users with millions of followers?',
      'What pattern did you miss in today\'s contest? How will you remember it next time?',
      'How do you decide whether to ask the interviewer for a hint?',
      'What\'s your time-boxing strategy during a 45-minute coding round?',
    ],
  },

  // ===================== PHASE 3 =====================
  31: {
    practicePrograms: [
      'Implement climbingStairs(n) using memoization, then convert to tabulation.',
      'Build houseRobber(nums) with O(1) space optimisation.',
      'Write wordBreak(s, wordDict) using bottom-up DP.',
      'Implement minCostClimbingStairs returning both the cost and the path taken.',
    ],
    interviewQuestions: [
      'Compare top-down (memoization) and bottom-up (tabulation) DP. Trade-offs?',
      'How do you define the "state" in a DP problem?',
      'In House Robber, what is the recurrence? What\'s the base case?',
      'How would you design a distributed counter (likes/views) at Instagram scale?',
      'What is a CRDT? How does it enable conflict-free replication?',
      'Explain eventual consistency vs strong consistency with examples.',
    ],
  },
  32: {
    practicePrograms: [
      'Implement 0/1 Knapsack with a 2D table, then optimise to 1D.',
      'Build coinChange(coins, amount) returning both the min coins and the actual coins.',
      'Write partitionEqualSubsetSum(nums) using subset-sum DP.',
      'Implement targetSum(nums, target) with the transformation to subset sum.',
    ],
    interviewQuestions: [
      'Why can\'t you use a 1D array for unbounded knapsack with the same direction as 0/1?',
      'In subset sum, what does dp[i][j] represent?',
      'How do you reconstruct the actual coins used in Coin Change?',
      'How would you design a payment system with idempotency?',
      'What is the saga pattern? How does it differ from 2PC?',
      'How do you handle compensation in a saga when a step fails?',
    ],
  },
  33: {
    practicePrograms: [
      'Implement longestCommonSubsequence(text1, text2) with O(n*m) time and O(min(n,m)) space.',
      'Build editDistance(word1, word2) returning both the distance and the operations.',
      'Write shortestCommonSupersequence(str1, str2).',
      'Implement distinctSubsequences(s, t) counting how many distinct ways t appears in s.',
    ],
    interviewQuestions: [
      'In LCS, why does dp[i][j] depend on dp[i-1][j], dp[i][j-1], dp[i-1][j-1]?',
      'How do you reduce LCS space from O(n*m) to O(min(n,m))?',
      'Walk through Edit Distance with "horse" and "ros". What\'s the answer?',
      'How would you design a distributed lock service? Redis Redlock vs Zookeeper?',
      'What is the controversy around Redlock? (Martin Kleppmann\'s critique)',
      'How does etcd\'s lease-based locking work?',
    ],
  },
  34: {
    practicePrograms: [
      'Implement longestIncreasingSubsequence in both O(n²) and O(n log n).',
      'Build russianDollEnvelopes(envelopes) using LIS after sorting.',
      'Write findNumberOfLIS(nums) returning the count of LIS.',
      'Implement patience sorting from scratch.',
    ],
    interviewQuestions: [
      'Explain patience sorting. How does it relate to LIS?',
      'Why is the O(n log n) LIS algorithm correct?',
      'In Russian Doll Envelopes, why sort by width ascending and height descending?',
      'How would you design a search autocomplete system?',
      'How do you A/B test autocomplete algorithms in production?',
      'How do you handle cold-start users with no history?',
    ],
  },
  35: {
    practicePrograms: [
      'Implement uniquePaths(m, n) and uniquePathsWithObstacles(grid).',
      'Build minimumPathSum(grid) in-place where allowed.',
      'Write dungeonGame(grid) using backward DP.',
      'Implement cherryPickup(grid) — two-pass vs single-pass DP.',
    ],
    interviewQuestions: [
      'In Dungeon Game, why do you DP backward instead of forward?',
      'What is the state in Cherry Pickup? Why is it 3D?',
      'How do you handle obstacles in Unique Paths II?',
      'How would you design a news feed ranking algorithm?',
      'What signals does EdgeRank use? How does it differ from modern ML ranking?',
      'How do you balance personalization with diversity in a feed?',
    ],
  },
  36: {
    practicePrograms: [
      'Implement Best Time to Buy and Sell Stock IV using state-machine DP.',
      'Build stockWithCooldown(prices) modelling 3 states (hold/cash/cooldown).',
      'Write stockWithTransactionFee(prices, fee) using 2 states.',
      'Implement stock II (unlimited transactions) and explain why greedy works.',
    ],
    interviewQuestions: [
      'Explain the state machine approach for stock problems.',
      'In Stock IV, what does dp[i][j][0/1] represent?',
      'How does cooldown change the state transitions?',
      'How would you design a stock exchange order matching engine?',
      'What is price-time priority? How is it enforced in an order book?',
      'How do you handle market orders vs limit orders in matching?',
    ],
  },
  37: {
    practicePrograms: [
      'Implement longestPalindromicSubstring using expand-around-center.',
      'Build longestPalindromicSubsequence using the gap method.',
      'Write palindromicSubstrings counting all palindromes.',
      'Implement minInsertionsToMakePalindrome(s) using LCS with reverse.',
    ],
    interviewQuestions: [
      'Compare expand-around-center vs DP for palindrome problems.',
      'In the gap method, what does the order of filling matter?',
      'How is Min Insertions related to Longest Palindromic Subsequence?',
      'How would you design Spotify\'s music streaming architecture?',
      'How do you handle audio chunking for adaptive streaming?',
      'What signals drive music recommendations?',
    ],
  },
  38: {
    practicePrograms: [
      'Implement houseRobberIII(root) returning the max amount with/without robbing each node.',
      'Build maximumSumBST(root) using post-order traversal with subtree metadata.',
      'Write binaryTreeCameras(root) using 3-state DP (covered/uncovered/has-camera).',
      'Implement longestZigZag(root) tracking left and right zigzag lengths.',
    ],
    interviewQuestions: [
      'In House Robber III, what does the recursive helper return? Why a pair?',
      'How does tree DP differ from regular DP? Why post-order?',
      'Explain the 3 states in Binary Tree Cameras. Why is each needed?',
      'How would you design an e-commerce product catalog?',
      'How do you handle faceted search efficiently (Elasticsearch)?',
      'How do you denormalize category trees for fast reads?',
    ],
  },
  39: {
    practicePrograms: [
      'Implement burstBalloons(nums) using interval DP.',
      'Build minCostToCutStick(n, cuts) using interval DP.',
      'Write guessNumberHigherOrLowerII(n) using min-max DP.',
      'Implement strangePrinter(s) using interval DP.',
    ],
    interviewQuestions: [
      'In Burst Balloons, why do you consider the LAST balloon to burst instead of the first?',
      'Explain the gap method for interval DP. What\'s the order of iteration?',
      'What is the state in Min Cost to Cut a Stick?',
      'How would you design a feature flag system?',
      'How do you implement gradual rollout with feature flags?',
      'How do you kill a misbehaving feature in production quickly?',
    ],
  },
  40: {
    practicePrograms: [
      'Implement partitionToKEqualSumSubsets using backtracking with bitmask.',
      'Build travelingSalesman(grid) using bitmask DP in O(2^n * n²).',
      'Write shortestSuperstring(words) using bitmask DP.',
      'Implement a generic bitmask DP template for small n (n <= 20).',
    ],
    interviewQuestions: [
      'How do you represent a subset using a bitmask? How do you check, add, remove elements?',
      'What is the time complexity of TSP with bitmask DP? Why is it exponential?',
      'When is bitmask DP feasible? What\'s the practical limit on n?',
      'How would you design a recommendation system?',
      'Compare collaborative filtering vs content-based vs hybrid.',
      'How do you handle cold-start for new users and new items?',
    ],
  },
  41: {
    practicePrograms: [
      'Implement allPathsFromSourceToTarget(graph) using DFS with path tracking.',
      'Build numberOfWaysToArrive(destination) using Dijkstra + DP.',
      'Write parallelCoursesIII using topo sort + DP on the longest path.',
      'Implement longestPathInDAG(graph) in O(V + E).',
    ],
    interviewQuestions: [
      'Why is DP on DAG tied to topological order?',
      'How do you find the longest path in a general graph? Why is it NP-hard?',
      'In Parallel Courses III, what does dp[i] represent?',
      'How would you design a distributed tracing system?',
      'What is a span? A trace? How are they related?',
      'How do you sample traces to control storage cost?',
    ],
  },
  42: {
    practicePrograms: [
      'Implement a SegmentTree class with build, query, update in O(log n).',
      'Build a SegmentTree with lazy propagation for range updates.',
      'Write countOfRangeSum(nums, lower, upper) using a segment tree or merge sort.',
      'Implement MyCalendarIII using a segment tree or sweep line.',
    ],
    interviewQuestions: [
      'Why is a segment tree O(log n) per query/update?',
      'Explain lazy propagation. What problem does it solve?',
      'When would you choose a segment tree over a Fenwick tree?',
      'How would you design a real-time leaderboard?',
      'How does Redis sorted set help with leaderboards?',
      'How do you handle ties in a leaderboard efficiently?',
    ],
  },
  43: {
    practicePrograms: [
      'Implement a FenwickTree (BIT) class with update and prefixSum in O(log n).',
      'Build countOfSmallerNumbersAfterSelf(nums) using BIT + coordinate compression.',
      'Write reversePairs(nums) using BIT or merge sort.',
      'Implement createSortedArrayThroughInstructions(nums) using BIT.',
    ],
    interviewQuestions: [
      'How does a Fenwick tree work? What does the LSB operation do?',
      'Compare Fenwick tree and segment tree. When do you use each?',
      'What is coordinate compression and why is it needed for BIT?',
      'How would you design a distributed job queue?',
      'How do you ensure exactly-once semantics in a job queue?',
      'How do you handle a worker failure mid-job?',
    ],
  },
  44: {
    practicePrograms: [
      'Implement trappingRainWater(height) using 3 approaches (2-pointer, DP, stack).',
      'Build firstMissingPositive(nums) in O(n) time and O(1) space.',
      'Write trappingRainWaterII(heightMap) using a priority queue.',
      'Re-solve 5 classic Hard problems from your weak list under 25 min each.',
    ],
    interviewQuestions: [
      'In Trapping Rain Water, what are the 3 main approaches? Compare them.',
      'How does First Missing Positive use index marking?',
      'In Trapping Rain Water II, why does a min-heap work for 2D?',
      'How would you design Pastebin?',
      'How do you handle abuse (spam, illegal content) in Pastebin?',
      'How do you expire old pastes efficiently?',
    ],
  },
  45: {
    practicePrograms: [
      'Take a LeetCode Weekly Contest and solve 3 problems including 1 Hard in 90 minutes.',
      'Design Uber end-to-end on a whiteboard — geohash, surge pricing, driver matching.',
      'Re-solve the hardest problem you couldn\'t crack this phase.',
      'Compile a "DP sub-patterns cheatsheet" with one example problem per pattern.',
    ],
    interviewQuestions: [
      'Walk me through your Uber design. How does geohash help?',
      'How does surge pricing work? What signals drive it?',
      'How do you match drivers to riders in real time?',
      'Which DP sub-pattern is still your weakest? What\'s your remediation plan?',
      'How do you handle ambiguity in a system design question?',
      'What\'s your strategy when the interviewer interrupts your design?',
    ],
  },

  // ===================== PHASE 4 =====================
  46: {
    practicePrograms: [
      'Write a Java program that triggers a full GC and prints heap usage before/after.',
      'Build a program that creates a deliberate memory leak (e.g., static List). Take a heap dump with jmap.',
      'Open the heap dump in Eclipse MAT and identify the leak. Document the dominator tree.',
      'Compare GC logs of Serial, Parallel, G1, and ZGC for the same workload.',
    ],
    interviewQuestions: [
      'Walk me through the JVM memory areas: heap, stack, method area, metaspace, PC register.',
      'Explain the difference between Serial, Parallel, G1, and ZGC. When do you use each?',
      'What is the difference between a minor GC and a major/full GC?',
      'How does G1 GC partition the heap? What are regions?',
      'What causes an OutOfMemoryError: Metaspace? How do you fix it?',
      'Explain class loading in Java. What is the parent delegation model?',
    ],
  },
  47: {
    practicePrograms: [
      'Implement a thread-safe Singleton using double-checked locking AND using enum.',
      'Build a BoundedBuffer<T> using ReentrantLock + Condition variables.',
      'Write a program that creates a deadlock. Diagnose it with jstack.',
      'Implement a producer-consumer pattern using BlockingQueue.',
    ],
    interviewQuestions: [
      'What is the happens-before relationship? Give 3 examples.',
      'Explain volatile vs synchronized. When do you use each?',
      'Why is double-checked locking broken without volatile?',
      'What is the difference between ReentrantLock and synchronized?',
      'Explain Condition variables. How do await/signal work?',
      'What is a deadlock? The 4 necessary conditions?',
    ],
  },
  48: {
    practicePrograms: [
      'Implement a ReadWriteLock use case (e.g., thread-safe cache with mostly reads).',
      'Build a program using CompletableFuture to fetch data from 3 APIs in parallel and merge results.',
      'Write a Semaphore-based rate limiter for 100 requests per second.',
      'Refactor a CompletableFuture pipeline to use virtual threads (Java 21).',
    ],
    interviewQuestions: [
      'Compare ReadWriteLock and StampedLock. When do you use each?',
      'What is optimistic read in StampedLock?',
      'Explain CountDownLatch vs CyclicBarrier vs Phaser.',
      'What are virtual threads? How do they differ from platform threads?',
      'What is structured concurrency? Why is it safer than async callbacks?',
      'When would you NOT use virtual threads?',
    ],
  },
  49: {
    practicePrograms: [
      'Re-implement a simple HashMap in Java with put, get, resize. Trigger treeify at threshold 8.',
      'Build a thread-safe cache using ConcurrentHashMap. Demonstrate computeIfAbsent.',
      'Write a program that uses CopyOnWriteArrayList and demonstrates when it\'s better than synchronized.',
      'Implement a parallel stream pipeline and benchmark it vs sequential.',
    ],
    interviewQuestions: [
      'Walk through HashMap internals in Java 17. What is the resize process?',
      'When does a bucket become a red-black tree? Why threshold 8?',
      'Explain ConcurrentHashMap in Java 8+. What replaced segments?',
      'What is the difference between computeIfAbsent and putIfAbsent?',
      'When is CopyOnWriteArrayList preferred over synchronized List?',
      'How does Spliterator enable parallel streams?',
    ],
  },
  50: {
    practicePrograms: [
      'Write a custom BeanPostProcessor that logs every bean creation.',
      'Build a @Around advice that measures method execution time.',
      'Implement a custom Spring Boot starter that auto-configures a feature flag client.',
      'Write a custom @Conditional that activates a bean only in production.',
    ],
    interviewQuestions: [
      'Walk through the Spring bean lifecycle from instantiation to destruction.',
      'Compare BeanFactory and ApplicationContext. When do you use each?',
      'What is the difference between singleton and prototype scope?',
      'Explain AOP. What are pointcuts, join points, and advice?',
      'Compare JDK dynamic proxy and CGLIB proxy. When is each used?',
      'How does @Transactional work under the hood? What is proxy-based transaction?',
    ],
  },
  51: {
    practicePrograms: [
      'Trace the SpringApplication.run() flow. Document each step.',
      'Build a custom auto-configuration class with @ConditionalOnClass and @ConditionalOnMissingBean.',
      'Write a custom actuator endpoint that exposes app-specific metrics.',
      'Implement a Micrometer gauge that tracks the size of an in-memory queue.',
    ],
    interviewQuestions: [
      'How does Spring Boot auto-configuration work? What is spring.factories / AutoConfiguration.imports?',
      'What is the @Conditional family? Give 5 examples.',
      'How do you override an auto-configuration?',
      'Explain the role of @ConfigurationProperties and relaxed binding.',
      'How does the actuator expose metrics? What is Micrometer?',
      'How do you write a custom Spring Boot starter?',
    ],
  },
  52: {
    practicePrograms: [
      'Reproduce the N+1 problem in a Spring Data JPA app. Fix it with fetch join and @EntityGraph.',
      'Build a service with @Transactional and demonstrate propagation REQUIRED vs REQUIRES_NEW.',
      'Write a program that demonstrates optimistic locking with @Version.',
      'Implement a pessimistic lock using @Lock(PESSIMISTIC_WRITE).',
    ],
    interviewQuestions: [
      'Explain JPA entity lifecycle states (new, managed, detached, removed).',
      'What is the N+1 problem? How do you detect and fix it?',
      'Explain transaction propagation. REQUIRED vs REQUIRES_NEW vs NESTED?',
      'What are isolation levels? Compare READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE.',
      'What is optimistic vs pessimistic locking? When do you use each?',
      'What is the "first commit wins" vs "last commit wins" strategy?',
    ],
  },
  53: {
    practicePrograms: [
      'Build a small microservices demo with Spring Cloud Gateway, Eureka, and 2 services.',
      'Implement a circuit breaker using Resilience4j. Configure fallback and retry.',
      'Write a service that publishes events to Kafka. Consume in another service.',
      'Implement a saga orchestrator for a 3-step transaction.',
    ],
    interviewQuestions: [
      'How does service discovery work in Spring Cloud? Eureka vs Consul?',
      'What is the role of an API Gateway? Spring Cloud Gateway vs Zuul?',
      'Explain the circuit breaker pattern. Closed, open, half-open states?',
      'Compare Resilience4j and Hystrix. Why did Hystrix die?',
      'What is a saga? Choreography vs orchestration?',
      'How do you handle compensation in a saga?',
    ],
  },
  54: {
    practicePrograms: [
      'Profile a slow Spring Boot endpoint using async-profiler. Identify the bottleneck.',
      'Tune HikariCP pool size for a sample workload. Compare before/after throughput.',
      'Add a Caffeine cache to a service. Measure latency reduction.',
      'Write an async controller using @Async and DeferredResult. Compare.',
    ],
    interviewQuestions: [
      'How do you profile a Java application? Compare JFR, async-profiler, and JMC.',
      'What is the optimal HikariCP pool size? (The formula from the wiki.)',
      'When do you use Caffeine vs Redis for caching?',
      'Explain @Async in Spring. What pool does it use by default?',
      'What is the difference between DeferredResult and CompletableFuture in controllers?',
      'How do you identify a CPU-bound vs IO-bound bottleneck?',
    ],
  },
  55: {
    practicePrograms: [
      'Record yourself answering 15 senior Java/Spring questions. Review the recording.',
      'Design an e-commerce checkout service on paper. Include idempotency and payment retries.',
      'Write a 1-page "talking points" doc listing 5 strengths from your 5 YOE.',
      'Compile a Java/Spring cheat sheet (one A4 page).',
    ],
    interviewQuestions: [
      'Walk me through what happens when a request hits @RestController in Spring Boot.',
      'How would you design an idempotent checkout API? What idempotency key?',
      'Tell me about a production incident you handled. What was the root cause?',
      'How did you scale a service in your last role? What bottlenecks did you hit?',
      'What\'s the most complex bug you debugged in production?',
      'How do you decide between synchronous and asynchronous processing?',
    ],
  },

  // ===================== PHASE 5 =====================
  56: {
    practicePrograms: [
      'Build a capacity estimation spreadsheet for a system with 100M users (QPS, storage, bandwidth).',
      'Draw an architecture diagram using draw.io for a typical 3-tier web app with LB, cache, DB.',
      'Write a "building blocks" cheat sheet (LB, gateway, CDN, queue, cache).',
      'Compare Nginx, HAProxy, and AWS ALB for 5 different scenarios.',
    ],
    interviewQuestions: [
      'What is the difference between L4 and L7 load balancing? When do you use each?',
      'Compare API gateway and reverse proxy. Are they the same?',
      'What is a service mesh? When do you need one (Istio/Linkerd)?',
      'Explain the role of a CDN. What is an edge location?',
      'What is the latency to read 1MB sequentially from disk vs RAM vs SSD? (Latency numbers.)',
      'How does DNS-based load balancing work? What are its limits?',
    ],
  },
  57: {
    practicePrograms: [
      'Design a sharded user database for 1B users. Document shard key, resharding plan.',
      'Build a capacity plan for a write-heavy system (10K writes/sec).',
      'Compare MySQL, PostgreSQL, MongoDB, and Cassandra across 6 dimensions.',
      'Write a doc explaining your sharding strategy for a multi-tenant SaaS.',
    ],
    interviewQuestions: [
      'Explain CAP theorem. Can you have CA, CP, or AP? Give examples.',
      'What is PACELC? How does it extend CAP?',
      'Compare vertical and horizontal scaling. Trade-offs?',
      'What are sharding strategies? Range-based, hash-based, directory-based?',
      'How do you choose a shard key? What makes a bad shard key?',
      'What is hot sharding? How do you mitigate it?',
    ],
  },
  58: {
    practicePrograms: [
      'Design a multi-tier cache for an e-commerce homepage (browser, CDN, app, Redis, DB).',
      'Implement a token-bucket rate limiter in Java that handles cache stampede with singleflight.',
      'Build a small demo that simulates the thundering herd problem and fixes it.',
      'Compare Redis eviction policies (LRU, LFU, random, TTL). Document when each wins.',
    ],
    interviewQuestions: [
      'Compare cache-aside, read-through, write-through, write-back. Trade-offs?',
      'What is cache stampede? How do you prevent it?',
      'Explain the thundering herd problem. How does singleflight help?',
      'When do you use LRU vs LFU eviction?',
      'How do you invalidate a cache? TTL vs explicit invalidation?',
      'What is cache penetration vs cache breakdown vs cache avalanche?',
    ],
  },
  59: {
    practicePrograms: [
      'Design an event-driven order processing system with Kafka + saga. Draw the topology.',
      'Set up a local Kafka cluster and produce/consume messages with exactly-once semantics.',
      'Build a producer with idempotence enabled. Test message deduplication.',
      'Compare RabbitMQ and Kafka for 3 different use cases. Document the choice.',
    ],
    interviewQuestions: [
      'Explain Kafka internals: partitions, offsets, consumer groups, ISR.',
      'What is the difference between at-least-once, at-most-once, and exactly-once?',
      'How does Kafka achieve exactly-once semantics?',
      'Compare Kafka, RabbitMQ, and Pulsar. When do you use each?',
      'What is a dead letter queue? How do you use it?',
      'How do you handle poison pill messages?',
    ],
  },
  60: {
    practicePrograms: [
      'Design Swiggy/Zomato on a whiteboard. List 8+ microservices and their data ownership.',
      'Implement a circuit breaker pattern from scratch in Java.',
      'Build a saga choreography demo with 3 services listening to events.',
      'Document 5 microservice anti-patterns you\'ve seen (or made) in production.',
    ],
    interviewQuestions: [
      'Compare service discovery patterns: client-side vs server-side.',
      'What is the BFF (Backend for Frontend) pattern? When do you use it?',
      'Explain the strangler fig pattern for migrating monolith to microservices.',
      'What is a sidecar? How does it relate to service mesh?',
      'Explain circuit breaker, bulkhead, and retry with backoff. How do they compose?',
      'What is the saga pattern? Choreography vs orchestration?',
    ],
  },
  61: {
    practicePrograms: [
      'Design a public payments API with idempotency keys, webhooks, and rate limiting.',
      'Build a demo API with cursor-based pagination and compare with offset pagination.',
      'Implement an idempotency middleware in Spring Boot.',
      'Document a versioning strategy for a public API (v1, v2, sunset).',
    ],
    interviewQuestions: [
      'Compare REST, gRPC, and GraphQL. When do you use each?',
      'How do idempotency keys work? Why are they essential for payments?',
      'Compare offset vs cursor pagination. When is cursor better?',
      'How do you version a public API? URL vs header vs content negotiation?',
      'What is the difference between PUT and PATCH?',
      'How do you design a webhook system? Retry, signing, ordering?',
    ],
  },
  62: {
    practicePrograms: [
      'Design and code a Parking Lot LLD in Java with at least 5 design patterns applied.',
      'Draw a UML class diagram for the Parking Lot using draw.io.',
      'Implement Strategy, Factory, Observer, Decorator, and Command patterns in small demos.',
      'Write SOLID violation examples and refactor each.',
    ],
    interviewQuestions: [
      'Explain each of the SOLID principles with an example.',
      'What is the difference between Strategy and State pattern?',
      'When do you use Factory vs Abstract Factory?',
      'Explain Observer pattern. How does it relate to pub-sub?',
      'What is the Open/Closed Principle? How do patterns help enforce it?',
      'What is the Dependency Inversion Principle? How does Spring help?',
    ],
  },
  63: {
    practicePrograms: [
      'Design and code a Chess game LLD in Java. Use Strategy for moves, Command for undo.',
      'Implement check and checkmate detection. Add a simple AI player.',
      'Build a thread-safe LLD for a multiplayer game lobby.',
      'Add undo/redo support using the Command pattern.',
    ],
    interviewQuestions: [
      'How would you design the chess pieces? Inheritance vs composition?',
      'How do you validate moves without a giant switch statement?',
      'How do you implement undo? Command pattern?',
      'How do you make a chess engine thread-safe for concurrent games?',
      'What is immutability? Why is it useful in concurrent LLD?',
      'How do you handle piece-specific special moves (castling, en passant)?',
    ],
  },
  64: {
    practicePrograms: [
      'Design and code a Vending Machine LLD with State pattern.',
      'Design and code an Elevator System LLD with multiple elevators and dispatch strategies.',
      'Implement a plugin/hook system for extensibility in a library.',
      'Add unit tests covering edge cases (out of stock, exact change, etc.).',
    ],
    interviewQuestions: [
      'How does the State pattern simplify a Vending Machine?',
      'How would you dispatch elevators in a 10-floor building with 3 elevators?',
      'What dispatch strategies would you consider? (Nearest, FCFS, SCAN.)',
      'How do you design for extensibility without modifying existing code?',
      'What is the Hollywood Principle? How does it relate to DI?',
      'How do you handle concurrency in an elevator system?',
    ],
  },
  65: {
    practicePrograms: [
      'Design a distributed counter for Instagram likes. Compare CRDT vs quorum vs Kafka.',
      'Implement a G-counter (CRDT) in Java. Demonstrate merge correctness.',
      'Set up a 3-node etcd cluster locally. Use it for distributed locking.',
      'Build a demo that detects concurrent updates using vector clocks.',
    ],
    interviewQuestions: [
      'Compare Paxos and Raft. Why is Raft considered easier to understand?',
      'What is a vector clock? How does it detect concurrent events?',
      'Explain eventual consistency. What does "eventually" mean?',
      'What is a CRDT? Give 2 examples (G-counter, G-set).',
      'How does the gossip protocol work? Why is it epidemic?',
      'What is a split-brain? How do consensus algorithms prevent it?',
    ],
  },
  66: {
    practicePrograms: [
      'Design Jio Hotstar for IPL final — 20M concurrent viewers. Document all assumptions.',
      'Draw the CDN architecture with origin shield, multi-CDN, edge caching.',
      'Build a cost estimate for streaming 20M concurrent viewers at 5 Mbps.',
      'Design a graceful degradation plan if a CDN edge fails.',
    ],
    interviewQuestions: [
      'How does Hotstar handle 20M concurrent viewers during IPL?',
      'Explain adaptive bitrate streaming. Why does it matter?',
      'What is origin shield? How does it reduce origin load?',
      'How does live streaming differ from VOD architecturally?',
      'How do you insert ads into a live stream?',
      'How would you handle a CDN outage mid-match?',
    ],
  },
  67: {
    practicePrograms: [
      'Design Flipkart Big Billion Days for 1M concurrent checkouts. Document inventory reservation.',
      'Build a small demo of inventory reservation with optimistic locking.',
      'Design a flash-sale queue that processes 10K requests/sec.',
      'Write a doc explaining your payment handling flow with retries and idempotency.',
    ],
    interviewQuestions: [
      'How do you handle inventory during a flash sale? Race conditions?',
      'What is inventory reservation? Pre-hold vs commit?',
      'How do you prevent overselling with 1M concurrent checkouts?',
      'How do you design the payment flow with retries and idempotency?',
      'What happens when payment times out but the user is charged?',
      'How do you handle cart abandonment during checkout?',
    ],
  },
  68: {
    practicePrograms: [
      'Mock interview: "Design Nike.com" — record yourself for 45 min. Watch the recording.',
      'Mock LLD: "Design a logging framework" — 30 min. Code in Java.',
      'Compile a system design cheat sheet (1 page) — components, patterns, numbers.',
      'Identify your top 3 weak areas. Plan remediation.',
    ],
    interviewQuestions: [
      'Walk me through your Nike.com design. What are the main components?',
      'What\'s the QPS estimate for the homepage during a product launch?',
      'How would you handle a global product launch with regional traffic spikes?',
      'How do you design a logging framework? What design patterns?',
      'How do you make the logging framework extensible for new sinks?',
      'What did you learn from the mock? What will you improve?',
    ],
  },

  // ===================== PHASE 6 =====================
  69: {
    practicePrograms: [
      'Write an optimised multi-stage Dockerfile for a Spring Boot app. Final image <100MB.',
      'Build a distroless image variant. Compare size and attack surface with the standard image.',
      'Scan an image with Trivy. Fix the top 5 vulnerabilities.',
      'Implement a BuildKit cache mount to speed up Maven builds.',
    ],
    interviewQuestions: [
      'Explain how Docker uses Linux namespaces and cgroups.',
      'What is the difference between containerd, runc, and Docker?',
      'What is the OCI spec? Why does it matter?',
      'How do multi-stage builds reduce image size?',
      'Why use distroless images? What\'s the trade-off?',
      'How do you optimise layer caching in a Dockerfile?',
    ],
  },
  70: {
    practicePrograms: [
      'Draw the K8s control plane. Trace a pod creation request from kubectl to running pod.',
      'Set up a local kind cluster. Inspect etcd, scheduler, controller manager.',
      'Deploy a pod and watch its QoS class. Manipulate requests/limits.',
      'Use a sidecar container in a pod. Demonstrate shared volume communication.',
    ],
    interviewQuestions: [
      'What are the control plane components? What does each do?',
      'How does the scheduler decide which node to place a pod on?',
      'What is the role of kubelet? Kube-proxy?',
      'Explain CRI, CNI, CSI. Why are they pluggable?',
      'What is a QoS class? Guaranteed, Burstable, BestEffort?',
      'What happens when a node fails? Walk through the recovery.',
    ],
  },
  71: {
    practicePrograms: [
      'Deploy a Spring Boot app with canary release strategy (10% canary, 90% stable).',
      'Configure network policies to deny all ingress by default, then allow specific.',
      'Set up an Ingress with TLS termination. Route to 2 services based on path.',
      'Install Cilium and replace the default CNI. Verify connectivity.',
    ],
    interviewQuestions: [
      'Compare Deployment, StatefulSet, DaemonSet. When do you use each?',
      'Explain rolling update vs blue-green vs canary deployment.',
      'What is a Service in K8s? ClusterIP vs NodePort vs LoadBalancer?',
      'What is an Ingress? How does it differ from a Service?',
      'What are NetworkPolicies? Default allow or default deny?',
      'Compare Calico and Cilium. eBPF advantages?',
    ],
  },
  72: {
    practicePrograms: [
      'Write a Helm chart for a 3-replica stateful app with PVCs.',
      'Set up ArgoCD. Deploy an app via GitOps. Demonstrate self-heal.',
      'Use Kustomize to manage 3 environments (dev, staging, prod) from a common base.',
      'Implement an ExternalSecret that pulls a secret from AWS Secrets Manager.',
    ],
    interviewQuestions: [
      'Explain PV, PVC, StorageClass. How do they relate?',
      'What is dynamic provisioning? How does it work?',
      'How does StatefulSet handle volumeClaimTemplates?',
      'Compare Helm and Kustomize. When do you use each?',
      'What is GitOps? Pull vs push deployment?',
      'How does ArgoCD detect drift? How does it self-heal?',
    ],
  },
  73: {
    practicePrograms: [
      'Write RBAC for a least-privilege CI/CD service account. Verify it can deploy but not read secrets.',
      'Apply Pod Security Standards (restricted) to a namespace.',
      'Install Kyverno and write a policy that disallows :latest images.',
      'Set up HashiCorp Vault with the K8s auth method for secret injection.',
    ],
    interviewQuestions: [
      'Explain Role, ClusterRole, RoleBinding, ClusterRoleBinding.',
      'What is the difference between ServiceAccount and User?',
      'What are Pod Security Standards? Baseline vs restricted?',
      'What are admission controllers? Mutating vs validating?',
      'How does Kyverno differ from OPA Gatekeeper?',
      'How do you manage secrets in K8s? Plain, Sealed Secrets, Vault?',
    ],
  },
  74: {
    practicePrograms: [
      'Design a CI/CD pipeline for microservices with ArgoCD + Argo Rollouts. Draw the topology.',
      'Implement a canary rollout with Argo Rollouts. Define success criteria (error rate < 1%).',
      'Set up a trunk-based development workflow with feature flags. Document the branching strategy.',
      'Implement a Kayenta-style canary analysis (even a simple version with Prometheus metrics).',
    ],
    interviewQuestions: [
      'Compare GitOps (pull) and traditional CI/CD (push). Trade-offs?',
      'What is progressive delivery? Canaries, blue-green, feature flags?',
      'How does Argo Rollouts differ from Deployment?',
      'What is canary analysis? What metrics would you use?',
      'How do you integrate feature flags with CI/CD?',
      'What is trunk-based development? How does it compare to GitFlow?',
    ],
  },
  75: {
    practicePrograms: [
      'Instrument a Spring Boot app with Micrometer + OpenTelemetry. Visualize in Grafana.',
      'Set up Prometheus + Alertmanager. Define alert rules for high error rate and latency.',
      'Write a runbook for a "service unavailable" alert. Include triage steps.',
      'Define SLOs for a service: availability 99.9%, p99 latency < 500ms.',
    ],
    interviewQuestions: [
      'What are the three pillars of observability?',
      'Compare Prometheus metrics, logs, and traces. When do you use each?',
      'What is OpenTelemetry? Why is it becoming the standard?',
      'Explain RED method (Rate, Errors, Duration) and USE method (Utilization, Saturation, Errors).',
      'What is the difference between SLO, SLI, and SLA?',
      'What is an error budget? How do you use it for feature velocity?',
    ],
  },

  // ===================== PHASE 7 =====================
  76: {
    practicePrograms: [
      'For each of your 6 target companies, list typical DSA topics, system design expectations, and bar level.',
      'Solve 3 problems tagged "Flipkart" on LeetCode. Time-box to 25 min each.',
      'Solve 3 problems tagged "Amazon" on LeetCode. Time-box to 25 min each.',
      'Create a per-company prep checklist with focus areas.',
    ],
    interviewQuestions: [
      'What does Flipkart typically ask in SDE-2 interviews?',
      'How does Amazon\'s bar-raiser round differ from technical rounds?',
      'What does Google ask that Amazon doesn\'t? (Harder DSA, less HLD.)',
      'What\'s the interview structure at Hotstar for a streaming role?',
      'What does Nike\'s engineering culture value? How does that show in interviews?',
      'What does SolarWinds look for given its monitoring focus?',
    ],
  },
  77: {
    practicePrograms: [
      'Draft 10 STAR stories from your 5 YOE. Quantify impact (latency %, $ saved, RPS handled).',
      'Map each story to 2-3 Amazon Leadership Principles.',
      'Record yourself answering 5 behavioural questions. Watch the recording.',
      'Refine stories to be 90 seconds each — crisp, structured, metric-driven.',
    ],
    interviewQuestions: [
      'Tell me about a time you took a calculated risk.',
      'Tell me about a time you disagreed with a senior leader.',
      'Tell me about a time you failed. What did you learn?',
      'Tell me about a time you delivered something with ambiguity.',
      'Tell me about a time you went above and beyond for a customer.',
      'Which Amazon LPs map to "Customer Obsession" and "Bias for Action"?',
    ],
  },
  78: {
    practicePrograms: [
      'Mock DSA interview (45 min) with a peer or Pramp. Hard problem.',
      'Mock system design interview (45 min). Topic: "Real-time leaderboard for a game."',
      'Watch both recordings. Note communication gaps and missed edge cases.',
      'Plan tomorrow\'s remediation: list 3 things to improve.',
    ],
    interviewQuestions: [
      'How do you start a system design interview? What questions do you ask first?',
      'How do you handle being stuck during a coding interview?',
      'What do you do if the interviewer hints at a different approach?',
      'How do you wrap up a system design answer in the last 5 minutes?',
      'How do you communicate trade-offs without rambling?',
      'What\'s your strategy when the interviewer says "what else?"',
    ],
  },
  79: {
    practicePrograms: [
      'Mock Java/Spring interview (45 min). Topic: "Walk me through @RestController request flow."',
      'Mock DevOps/K8s interview (45 min). Topic: "Design our K8s cluster for 50 microservices."',
      'Mock LLD interview (45 min). Topic: "Design a rate limiter library."',
      'Finalise talking points from your 5 YOE — 3 projects with metrics.',
    ],
    interviewQuestions: [
      'Walk me through what happens when a request hits @RestController in Spring Boot.',
      'How would you design a K8s cluster for 50 microservices? Autoscaling? RBAC?',
      'How do you handle a pod that keeps OOMKilling in production?',
      'How would you design a rate limiter library? What patterns?',
      'How do you make the rate limiter distributed? Redis vs in-memory?',
      'Tell me about a production incident you debugged. What was the root cause?',
    ],
  },
  80: {
    practicePrograms: [
      'Polish your resume — add metrics (latency reduced X%, $Y saved, Z RPS handled).',
      'Tailor a cover letter template per company.',
      'Research levels.fyi salary bands for your 20 target openings.',
      'Prepare a counter-offer script and your walk-away number.',
    ],
    interviewQuestions: [
      'Why are you leaving your current role?',
      'Why do you want to join our company specifically?',
      'What\'s your expected salary? (Have a number ready with justification.)',
      'Do you have competing offers? (How to answer strategically.)',
      'What are your strengths? (Tie to LPs and the role.)',
      'Where do you see yourself in 3 years? (Tie to the company\'s career ladder.)',
    ],
  },
};

/** Helper to fetch extras safely. */
export function getDayExtras(day: number): DayExtras {
  return dayExtras[day] ?? { practicePrograms: [], interviewQuestions: [] };
}

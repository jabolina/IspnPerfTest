window.BENCHMARK_DATA = {
  "lastUpdate": 1772229729261,
  "repoUrl": "https://github.com/jabolina/IspnPerfTest",
  "entries": {
    "3n-ds-jdk25-vt-ispn16-jg5.5": [
      {
        "commit": {
          "author": {
            "name": "José Bolina",
            "username": "jabolina",
            "email": "jose@infinispan.org"
          },
          "committer": {
            "name": "José Bolina",
            "username": "jabolina",
            "email": "jose@infinispan.org"
          },
          "id": "8a106151a7641f1df61c491fd01220e4d7d6b1e6",
          "message": "Trying dynamic tracking generation",
          "timestamp": "2026-02-27T20:39:06Z",
          "url": "https://github.com/jabolina/IspnPerfTest/commit/8a106151a7641f1df61c491fd01220e4d7d6b1e6"
        },
        "date": 1772226287324,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Cluster Throughput",
            "value": 203375.93,
            "unit": "reqs/sec",
            "extra": "nodes=3 config=dist-sync-gcp.xml jdk=25 vthreads=true"
          }
        ]
      }
    ],
    "3 nodes, dist-sync (Virtual Threads)": [
      {
        "commit": {
          "author": {
            "name": "José Bolina",
            "username": "jabolina",
            "email": "jose@infinispan.org"
          },
          "committer": {
            "name": "José Bolina",
            "username": "jabolina",
            "email": "jose@infinispan.org"
          },
          "id": "4f3d94f5ef4c597a9071ce54a23bd7b7e5812944",
          "message": "Trying dynamic tracking generation",
          "timestamp": "2026-02-27T21:51:30Z",
          "url": "https://github.com/jabolina/IspnPerfTest/commit/4f3d94f5ef4c597a9071ce54a23bd7b7e5812944"
        },
        "date": 1772229728939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Cluster Throughput",
            "value": 203968.41,
            "unit": "reqs/sec",
            "extra": "JDK 25, Infinispan 16.0.2, JGroups 5.5.1"
          }
        ]
      }
    ]
  }
}
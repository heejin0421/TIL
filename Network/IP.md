# IP

지정한 IP 주소(IP Address)에 패킷(Packet)이라는 통신 단위로 데이터 전달을 한다.

IP 와 IP Packet - IP 프로토콜 한계

- 비연결성
  패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷 전송

- 비신뢰성
  중간에 패킷이 사라질 수 있음
  패킷의 순서를 보장할 수 없음

# TCP 특징

전송 제어 프로토콜(Transmission Control Protocol)

- 연결 지향 - TCP 3 way handshake(가상 연결)
- 데이터 전달 보증
- 순서 보장
- 신뢰할 수 있는 프로토콜

# UDP 특징

사용자 데이터그램 프로토콜(User Datagram Protocol)

- 하얀 도화지에 비유(기능이 거의 없음)
- 비 연결지향 - TCP 3 way handshake X
- 데이터 전달 보중 X
- 순서 보장 X
- 데이터 전달 및 순서가 보장되지 않지만, 단순하고 빠름
- 신뢰성보다는 연속성이 중요한 서비스에서 자주 사용됨

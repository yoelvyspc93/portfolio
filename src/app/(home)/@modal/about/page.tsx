import { AboutModal } from '@/components/common/AboutModal';
import { Modal } from '@/components/common/Modal';

export default function AboutModalPage() {
  return (
    <Modal isOpen title="About">
      <AboutModal />
    </Modal>
  );
}

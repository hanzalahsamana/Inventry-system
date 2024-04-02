import mock from './mock';
import '../../Store/apps/Notes/NotesSlice';
import '../../Store/apps/contacts/ContactSlice';
import '../../Store/apps/email/EmailSlice';
import '../../Store/apps/chat/ChatSlice';
import '../../Store/apps/email/EmailSlice';

mock.onAny().passThrough();

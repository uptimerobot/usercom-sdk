# Usercom.com API node SDK

This is wrapper for [usercom.com API](https://user.com/en/api/introduction/).

## Usage

Import Usercom

```node
import { Usercom } from 'usercom-node-sdk';
```

Initialize the client

```node
const usercom = new UsercomSDK({
  subdomain: '<your-usercom-app>',
  token: '<your-api-key>',
});
```

### Users

```node
// returns a page of users.
// If next is null it returns the first page.
usercom.user.users({ next });

// creates a single user, visit api docs for payload info
usercom.user.create({ data });

// updates user using userId attribute,
// not the ID used by usercom.
// Currently supports updating custom attributes only
usercom.user.update({ userId, customAttributes });

// deletes user based on user ID attribute
usercom.user.delete({ userId });
```

### Events

```node
// timestamp and data is optional
usercom.event.create({ userId, name, timestamp, data });
```

### Tags

```node
// returns paginated results of usercom tags
usercom.tags();

// returns a fetcher function similar to usercom.user.users
// based on the provided tagId argument
usercom.getUsersWithTag(tagId);
```
